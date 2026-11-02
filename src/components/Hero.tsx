import { useState, type MouseEvent } from 'react';
import { ArrowDownRight, Mail, MapPin, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';
import { useScrollY } from '@/hooks/useScrollY';
import OrbitRing from '@/components/OrbitRing';
import Magnetic from '@/components/Magnetic';
import SplitText from '@/components/SplitText';
import Parallax from '@/components/Parallax';

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  size: 2 + (i % 4),
  delay: `${(i * 0.5) % 5}s`,
  duration: `${5 + (i % 4)}s`,
}));

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const scrollY = useScrollY();

  function handleMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 40, y: -py * 30 });
  }

  const textShift = Math.min(scrollY * 0.25, 120);
  const ringSpin = tilt.x + scrollY * 0.12;

  return (
    <section
      id="top"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-24"
    >
      {/* Grid overlay with parallax */}
      <Parallax speed={0.15}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        />
      </Parallax>

      {/* Glow orbs with parallax */}
      <Parallax speed={0.08} className="pointer-events-none">
        <div
          aria-hidden
          className="animate-pulse-glow pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-crimson-600/30 blur-[120px]"
        />
      </Parallax>
      <Parallax speed={0.05} className="pointer-events-none">
        <div
          aria-hidden
          className="animate-pulse-glow pointer-events-none absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-gold-500/20 blur-[120px]"
        />
      </Parallax>

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          aria-hidden
          className="animate-float pointer-events-none absolute rounded-full bg-gold-300/70 shadow-[0_0_10px_rgba(240,216,138,0.8)]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* 3D tilt decorative shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[5%] top-[15%] hidden lg:block"
        style={{
          transform: `perspective(800px) rotateX(${tilt.y * 0.5}deg) rotateY(${tilt.x * 0.5}deg) translateZ(40px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="h-24 w-24 rounded-2xl border border-gold-500/20 bg-gold-500/5 backdrop-blur-sm" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] bottom-[12%] hidden lg:block"
        style={{
          transform: `perspective(800px) rotateX(${-tilt.y * 0.3}deg) rotateY(${-tilt.x * 0.3}deg) translateZ(60px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="h-16 w-16 rounded-full border border-crimson-500/20 bg-crimson-500/5 backdrop-blur-sm" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="text-center lg:text-left" style={{ transform: `translate3d(0, ${-textShift * 0.3}px, 0)` }}>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-ink-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300 backdrop-blur animate-reveal-up">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shadow-[0_0_10px_#d4af37]" />
            {profile.tagline}
          </p>

          <h1 className="mt-8 font-display text-6xl font-semibold leading-[1.02] text-cream sm:text-7xl lg:text-[5.5rem]">
            <span className="block animate-reveal-up" style={{ animationDelay: '0.1s' }}>
              Hi, I'm
            </span>
            <span className="mt-2 block text-gradient-gold animate-shimmer">
              <SplitText text={profile.name} delay={400} stagger={50} />
            </span>
          </h1>

          <p
            className="mt-6 text-xl font-medium text-gold-200 animate-reveal-up sm:text-2xl"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            {profile.headline}
          </p>
          <p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70 animate-reveal-up lg:mx-0"
            style={{ animationDelay: '0.75s', animationFillMode: 'both' }}
          >
            I build responsive websites and clean Python tools, and I turn raw data into insight
            that people can act on.
          </p>

          <div
            className="mt-10 flex flex-col items-center gap-4 animate-reveal-up sm:flex-row sm:justify-center lg:justify-start"
            style={{ animationDelay: '0.9s', animationFillMode: 'both' }}
          >
            <Magnetic strength={0.25}>
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-[0_10px_30px_-8px_rgba(212,175,55,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-8px_rgba(212,175,55,0.8)]"
              >
                View my work
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-crimson-500/70 bg-crimson-900/30 px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-300"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </Magnetic>
          </div>

          <div
            className="mt-10 flex flex-col items-center gap-3 text-sm text-cream/60 animate-reveal-up sm:flex-row sm:gap-6 lg:justify-start"
            style={{ animationDelay: '1.05s', animationFillMode: 'both' }}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-400" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold-400" />
              Available for opportunities
            </span>
          </div>
        </div>

        <div className="relative flex items-center justify-center [perspective:1200px]">
          <OrbitRing rotateX={tilt.y} rotateY={ringSpin} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-xs font-medium uppercase tracking-widest text-cream/40">Scroll</span>
        <div className="flex h-12 w-6 justify-center rounded-full border border-gold-500/30 p-1">
          <span className="h-2 w-1 animate-scroll-dot rounded-full bg-gold-400" />
        </div>
      </div>
    </section>
  );
}
