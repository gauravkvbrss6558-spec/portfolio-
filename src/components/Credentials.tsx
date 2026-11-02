import { Award, GraduationCap } from 'lucide-react';
import { certifications, education } from '@/data/profile';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import TiltCard from '@/components/TiltCard';

export default function Credentials() {
  return (
    <section id="credentials" className="relative scroll-mt-20 py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Credentials" title="Education & certifications" />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Reveal>
              <h3 className="flex items-center gap-3 font-display text-2xl font-semibold text-cream">
                <GraduationCap className="h-6 w-6 text-gold-400" />
                Education
              </h3>
            </Reveal>
            {education.map((item, index) => (
              <Reveal key={item.school} delay={index * 120}>
                <TiltCard className="p-6">
                  <p className="text-lg font-semibold text-cream">{item.school}</p>
                  <p className="mt-1 text-sm text-cream/65">{item.detail}</p>
                  {item.period && (
                    <span className="mt-4 inline-block rounded-full bg-crimson-900/50 px-3 py-1 text-xs font-medium text-gold-300">
                      {item.period}
                    </span>
                  )}
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-6 lg:col-span-3">
            <Reveal>
              <h3 className="flex items-center gap-3 font-display text-2xl font-semibold text-cream">
                <Award className="h-6 w-6 text-gold-400" />
                Certifications
              </h3>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <li key={cert} className="h-full list-none">
                  <Reveal delay={index * 90} className="h-full">
                    <TiltCard className="flex h-full items-center gap-4 p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-gold-400 to-gold-700">
                        <Award className="h-5 w-5 text-ink-950" />
                      </span>
                      <span className="text-sm font-medium leading-snug text-cream/90">{cert}</span>
                    </TiltCard>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
