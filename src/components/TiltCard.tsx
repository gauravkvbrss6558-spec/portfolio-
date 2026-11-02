import { useRef, type MouseEvent, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

const REST_TRANSFORM = 'perspective(900px) rotateX(0deg) rotateY(0deg)';

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 10}deg) rotateY(${(px - 0.5) * 12}deg)`;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  }

  function handleLeave() {
    if (ref.current) ref.current.style.transform = REST_TRANSFORM;
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform: REST_TRANSFORM }}
      className={`group relative overflow-hidden rounded-2xl border border-gold-500/20 bg-gradient-to-b from-ink-700/80 to-ink-900/90 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] transition-[transform,border-color,box-shadow] duration-300 ease-out will-change-transform hover:border-gold-500/50 hover:shadow-[0_30px_60px_-20px_rgba(196,42,48,0.35)] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(380px circle at var(--mx, 50%) var(--my, 50%), rgba(212,175,55,0.16), transparent 60%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
