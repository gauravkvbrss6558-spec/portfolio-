import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent" aria-hidden>
      <div
        className="h-full origin-left bg-gradient-to-r from-crimson-500 via-gold-400 to-gold-600 shadow-[0_0_12px_rgba(212,175,55,0.7)]"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
