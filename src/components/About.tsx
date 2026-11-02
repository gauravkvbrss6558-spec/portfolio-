import { Briefcase, Mail, MapPin, Sparkles, Award } from 'lucide-react';
import { certifications, experiences, profile } from '@/data/profile';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import TiltCard from '@/components/TiltCard';
import CountUp from '@/components/CountUp';

const stats = [
  { value: experiences.length, suffix: '', label: 'Internships & roles', icon: Briefcase },
  { value: certifications.length, suffix: '', label: 'Certifications', icon: Award },
  { value: 2024, suffix: '', label: 'Patna University', icon: Sparkles },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="About me" title="Data, code and a sense of purpose" />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          <Reveal variant="left" className="lg:col-span-3">
            <TiltCard className="h-full p-8 sm:p-10">
              <p className="font-display text-2xl leading-relaxed text-cream sm:text-3xl">
                "Good analysis starts with curiosity and ends with clear, useful action."
              </p>
              <div className="my-8 h-px w-16 bg-gradient-to-r from-gold-500 to-transparent" />
              <p className="leading-relaxed text-cream/75">{profile.summary}</p>
            </TiltCard>
          </Reveal>

          <Reveal variant="right" delay={150} className="flex flex-col gap-6 lg:col-span-2">
            {stats.map((stat) => (
              <TiltCard key={stat.label} className="flex items-center gap-5 p-6">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-crimson-500 to-crimson-900 shadow-lg">
                  <stat.icon className="h-6 w-6 text-gold-300" />
                </span>
                <div>
                  <p className="font-display text-4xl font-semibold text-gold-300">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-cream/65">{stat.label}</p>
                </div>
              </TiltCard>
            ))}
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-gold-500/20 bg-ink-900/60 px-8 py-6 text-sm text-cream/75 sm:flex-row">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold-400" />
              {profile.status}
            </span>
            <span className="inline-flex items-center gap-6">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-gold-300">
                <Mail className="h-4 w-4 text-gold-400" />
                {profile.email}
              </a>
              <span className="hidden items-center gap-2 md:inline-flex">
                <MapPin className="h-4 w-4 text-gold-400" />
                {profile.location}
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
