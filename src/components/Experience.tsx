import { useEffect, useRef, useState, type RefObject } from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { experiences } from '@/data/profile';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import TiltCard from '@/components/TiltCard';

function useTimelineProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight * 0.6;
      const raw = (viewport - rect.top) / rect.height;
      setProgress(Math.min(Math.max(raw, 0), 1));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref]);

  return progress;
}

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const progress = useTimelineProgress(listRef);

  return (
    <section id="experience" className="relative scroll-mt-20 py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="A journey through internships"
            description="Hands-on roles across data science, AI/ML, Python, web development and community work."
          />
        </Reveal>

        <div ref={listRef} className="relative mt-20 pl-8 sm:pl-12">
          <div aria-hidden className="absolute left-0 top-0 h-full w-px bg-gold-500/20" />
          <div
            aria-hidden
            className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-gold-300 via-gold-500 to-crimson-500 shadow-[0_0_10px_rgba(212,175,55,0.7)] transition-transform duration-300 ease-out"
            style={{ transform: `scaleY(${progress})` }}
          />
          <ol className="relative">
          {experiences.map((item, index) => (
            <li key={`${item.company}-${item.period}`} className="relative list-none pb-12 last:pb-0">
              <span
                className={`absolute -left-[37px] top-6 flex h-4 w-4 items-center justify-center rounded-full border bg-ink-950 transition-colors duration-500 sm:-left-[53px] ${
                  progress > index / experiences.length ? 'border-gold-400' : 'border-gold-500/30'
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                    progress > index / experiences.length
                      ? 'bg-crimson-500 shadow-[0_0_8px_#c42a30]'
                      : 'bg-transparent'
                  }`}
                />
              </span>
              <Reveal delay={index * 60} variant="left">
                <TiltCard className="p-6 sm:p-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-cream">{item.role}</h3>
                      <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-gold-300">
                        <Building2 className="h-4 w-4" />
                        {item.company}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-crimson-500/50 bg-crimson-900/40 px-3 py-1 text-xs font-medium text-cream/85">
                      <Calendar className="h-3.5 w-3.5 text-gold-400" />
                      {item.period}
                    </span>
                  </div>

                  {item.location && (
                    <p className="mt-3 inline-flex items-center gap-2 text-sm text-cream/55">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </p>
                  )}

                  {item.points && (
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-cream/75">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </TiltCard>
              </Reveal>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
