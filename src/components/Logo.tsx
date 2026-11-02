import { useScrollY } from '@/hooks/useScrollY';

interface LogoProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export default function Logo({ size = 44, className = '', animate = true }: LogoProps) {
  const scrollY = useScrollY();
  const spin = animate ? scrollY * 0.4 : 0;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`shrink-0 ${className}`}
      style={{ transform: `rotate(${spin}deg)`, transition: 'transform 0.1s linear' }}
      aria-hidden
    >
      <defs>
        <linearGradient id="logoGold" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#f5e4a8" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#8a6d1f" />
        </linearGradient>
        <linearGradient id="logoCrimson" x1="0" y1="0" x2="0" y2="48">
          <stop offset="0%" stopColor="#c42a30" />
          <stop offset="100%" stopColor="#3d0a0d" />
        </linearGradient>
        <filter id="logoGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#logoCrimson)" stroke="url(#logoGold)" strokeWidth="1.5" opacity="0.95" />

      <g filter="url(#logoGlow)">
        <path d="M24 9 L35 24 L24 39 L13 24 Z" fill="none" stroke="url(#logoGold)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 16 L30 24 L24 32 L18 24 Z" fill="url(#logoGold)" opacity="0.9" />
      </g>

      <circle cx="24" cy="24" r="2.5" fill="#050505" />

      <circle cx="24" cy="8" r="1.2" fill="#f0d88a" opacity="0.8" />
      <circle cx="40" cy="24" r="1.2" fill="#f0d88a" opacity="0.6" />
      <circle cx="24" cy="40" r="1.2" fill="#f0d88a" opacity="0.8" />
      <circle cx="8" cy="24" r="1.2" fill="#f0d88a" opacity="0.6" />
    </svg>
  );
}
