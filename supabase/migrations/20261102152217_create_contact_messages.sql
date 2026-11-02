/*
# Create contact_messages table (public write-only inbox)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, required, 1-100 characters)
  - `email` (text, required, 3-255 characters)
  - `message` (text, required, 1-2000 characters)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Row level security is enabled on `contact_messages`.
- Visitors (anon and authenticated) can only INSERT new messages. They cannot read, edit or delete anything.
- Length checks in the table guard against empty or oversized submissions.
- The owner reads messages through the Supabase dashboard, which bypasses these public rules.

3. Notes
- Table is created with IF NOT EXISTS and policies are dropped before recreation, so this migration is safe to re-run.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
