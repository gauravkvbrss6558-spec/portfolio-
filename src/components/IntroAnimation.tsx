import { useEffect, useState } from 'react';
import Logo from '@/components/Logo';

export default function IntroAnimation() {
  const [stage, setStage] = useState<'enter' | 'hold' | 'exit' | 'done'>('enter');

  useEffect(() => {
    const t1 = setTimeout(() => setStage('hold'), 100);
    const t2 = setTimeout(() => setStage('exit'), 2000);
    const t3 = setTimeout(() => setStage('done'), 3200);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (stage === 'exit') {
      const t = setTimeout(() => {
        document.body.style.overflow = '';
      }, 600);
      return () => clearTimeout(t);
    }
  }, [stage]);

  if (stage === 'done') return null;

  const overlayStyle: React.CSSProperties =
    stage === 'exit'
      ? { transform: 'translateY(-100%)', transition: 'transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)' }
      : { transform: 'translateY(0)', transition: 'transform 0.5s ease-out' };

  const logoScale = stage === 'enter' ? 0 : 1;
  const logoOpacity = stage === 'enter' ? 0 : stage === 'exit' ? 0 : 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
      style={overlayStyle}
      aria-hidden
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute h-96 w-96 rounded-full bg-crimson-600/20 blur-[100px]"
        style={{ opacity: stage === 'exit' ? 0 : 1, transition: 'opacity 0.5s' }}
      />

      <div className="relative flex flex-col items-center gap-6">
        <div
          style={{
            transform: `scale(${logoScale})`,
            opacity: logoOpacity,
            transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease',
          }}
          className="animate-float"
        >
          <Logo size={80} animate={false} />
        </div>

        <div
          className="flex items-center gap-1.5"
          style={{ opacity: stage === 'exit' ? 0 : 1, transition: 'opacity 0.4s' }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold-400"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>

        <div className="h-px w-32 overflow-hidden rounded-full bg-gold-500/20">
          <div
            className="h-full bg-gradient-to-r from-gold-400 to-crimson-500"
            style={{
              width: stage === 'enter' ? '0%' : '100%',
              transition: 'width 1.8s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
