import { skillGroups } from '@/data/profile';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import TiltCard from '@/components/TiltCard';

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I use to build and analyse"
            description="A toolkit spanning data, code, machine learning and the web."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 80} className="h-full">
              <TiltCard className="h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/40 bg-crimson-900/50">
                  <group.icon className="h-5 w-5 text-gold-300" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-cream">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-gold-500/25 bg-ink-950/70 px-3 py-1.5 text-xs font-medium text-cream/85 transition-colors duration-300 group-hover:border-gold-500/50"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
