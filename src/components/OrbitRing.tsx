import { Gem } from 'lucide-react';
import { ringSkills } from '@/data/profile';

interface OrbitRingProps {
  rotateX: number;
  rotateY: number;
}

const RADIUS = 210;

export default function OrbitRing({ rotateX, rotateY }: OrbitRingProps) {
  return (
    <div
      className="relative h-[420px] w-[420px] scale-[0.72] transition-transform duration-500 ease-out [transform-style:preserve-3d] sm:scale-90 lg:scale-100"
      style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
    >
      <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
        <div className="animate-spin-slow absolute h-[400px] w-[400px] rounded-full border border-dashed border-gold-500/40 [transform-style:preserve-3d]" />
        <div className="animate-spin-slow absolute h-[300px] w-[300px] rounded-full border border-crimson-500/40 [animation-direction:reverse] [transform-style:preserve-3d]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-gold-400/60 bg-gradient-to-br from-crimson-500 via-crimson-700 to-ink-950 shadow-[0_0_80px_rgba(212,175,55,0.35)] animate-float">
          <div className="absolute inset-2 rounded-2xl border border-gold-300/30" />
          <Gem className="h-12 w-12 text-gold-300 drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]" strokeWidth={1.5} />
        </div>
      </div>

      <div className="absolute inset-0 [transform-style:preserve-3d]">
        <div className="animate-orbit absolute inset-0 [transform-style:preserve-3d]">
          {ringSkills.map(({ label, icon: Icon }, index) => {
            const angle = (360 / ringSkills.length) * index;
            return (
              <div
                key={label}
                className="absolute left-1/2 top-1/2 w-[150px]"
                style={{
                  transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                }}
              >
                <div className="flex items-center gap-3 rounded-xl border border-gold-500/40 bg-ink-900/90 px-4 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.9)] backdrop-blur">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-crimson-600/30">
                    <Icon className="h-4 w-4 text-gold-300" />
                  </span>
                  <span className="text-sm font-semibold text-cream">{label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
