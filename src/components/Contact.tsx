import { ArrowUpRight, Gem, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import Reveal from '@/components/Reveal';
import TiltCard from '@/components/TiltCard';

const contactCards = [
  {
    label: 'Email me',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'gauravkumar004',
    href: profile.linkedin,
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="relative scroll-mt-20 py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Contact</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-cream sm:text-6xl">
              Let's build something <span className="text-gradient-gold">remarkable</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-cream/70">
              Open to opportunities in data analytics, software development and tech roles. Reach out
              directly through the links below.
            </p>
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-2">
            {contactCards.map((card, index) => (
              <Reveal key={card.label} variant="up" delay={index * 120} className="h-full">
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group block h-full"
                >
                  <TiltCard className="flex h-full items-center gap-5 p-6">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-crimson-500 to-crimson-900 shadow-lg">
                      <card.icon className="h-6 w-6 text-gold-300" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">{card.label}</p>
                      <p className="mt-1 truncate text-base text-cream/90">{card.value}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-cream/50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-300" />
                  </TiltCard>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-6 max-w-3xl">
            <div className="rounded-2xl border border-gold-500/20 bg-gradient-to-br from-crimson-900/40 to-ink-900 p-6 text-center">
              <p className="font-display text-2xl font-semibold text-cream">Based in {profile.location}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-gold-500/15 bg-ink-900/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-cream/55 sm:flex-row">
          <span className="inline-flex items-center gap-3">
            <Gem className="h-4 w-4 text-gold-400" />
            {profile.name} - {profile.headline}
          </span>
          <a href="#top" className="transition-colors hover:text-gold-300">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
