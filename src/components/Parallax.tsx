import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Parallax({ children, speed = 0.2, className = '', style }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        setOffset((center - viewportCenter) * speed * -1);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transform: `translate3d(0, ${offset}px, 0)` }}
    >
      {children}
    </div>
  );
}
