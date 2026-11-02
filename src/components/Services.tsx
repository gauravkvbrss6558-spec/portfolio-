import { services } from '@/data/profile';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="What I do"
            title="Three disciplines, one builder"
            description="Hover over a card to flip it and see how I can help."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} variant="flip" delay={index * 140} className="h-[360px] [perspective:1400px]">
              <div className="group relative h-full w-full cursor-pointer [transform-style:preserve-3d] transition-transform duration-700 ease-out hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-gold-500/30 bg-gradient-to-br from-ink-700 via-ink-800 to-crimson-900/60 p-8 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.9)] [backface-visibility:hidden]">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold-400/50 bg-ink-950/60 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                    <service.icon className="h-7 w-7 text-gold-300" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold text-cream">{service.title}</h3>
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-gold-400/60 bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 p-8 text-ink-950 shadow-[0_30px_60px_-20px_rgba(212,175,55,0.5)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-ink-950/85">{service.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm font-semibold">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-crimson-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
