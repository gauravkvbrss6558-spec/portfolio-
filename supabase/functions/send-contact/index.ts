import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RECIPIENT = "gauravkvbrss6558@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return json({ error: "Method not allowed." }, 405);
    }

    const payload = await req.json().catch(() => null);
    const name = typeof payload?.name === "string" ? payload.name.trim() : "";
    const email = typeof payload?.email === "string" ? payload.email.trim() : "";
    const message = typeof payload?.message === "string" ? payload.message.trim() : "";

    if (!name || name.length > 100 || !message || message.length > 2000) {
      return json({ error: "Please check your name and message." }, 400);
    }
    if (!EMAIL_PATTERN.test(email) || email.length > 255) {
      return json({ error: "Please enter a valid email address." }, 400);
    }

    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return json({ error: "Messaging is not configured yet. Please try again later." }, 500);
    }

    const safeName = name.replace(/[\r\n]+/g, " ");
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [RECIPIENT],
        reply_to: email,
        subject: `New portfolio message from ${safeName}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!emailResponse.ok) {
      console.error("Resend rejected the email", emailResponse.status, await emailResponse.text());
      return json({ error: "We could not send your message right now. Please try again." }, 502);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    const { error } = await supabase.from("contact_messages").insert({ name, email, message });
    if (error) {
      console.error("Failed to store contact message", error.message);
    }

    return json({ ok: true });
  } catch (err) {
    console.error("send-contact failed", err);
    return json({ error: "Something went wrong. Please try again." }, 500);
  }
});
