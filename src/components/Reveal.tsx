import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'flip';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  variant?: RevealVariant;
  className?: string;
}

const HIDDEN_TRANSFORM: Record<RevealVariant, string> = {
  up: 'translate3d(0, 56px, 0)',
  left: 'translate3d(-56px, 0, 0)',
  right: 'translate3d(56px, 0, 0)',
  scale: 'scale(0.9)',
  flip: 'perspective(1000px) rotateX(-32deg) translate3d(0, 40px, 0)',
};

export default function Reveal({ children, delay = 0, variant = 'up', className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : HIDDEN_TRANSFORM[variant],
    transitionProperty: 'opacity, transform',
    transitionDuration: '900ms',
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
