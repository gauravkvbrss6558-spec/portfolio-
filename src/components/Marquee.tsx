import { marqueeTags } from '@/data/profile';

export default function Marquee() {
  const loop = [...marqueeTags, ...marqueeTags];
  return (
    <div className="relative overflow-hidden border-y border-gold-500/20 bg-ink-900/80 py-5 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {loop.map((tag, index) => (
          <span key={`${tag}-${index}`} className="inline-flex items-center gap-10 font-display text-2xl font-semibold text-cream/80">
            {tag}
            <span className="h-2 w-2 rotate-45 bg-gradient-to-br from-gold-300 to-crimson-500" />
          </span>
        ))}
      </div>
    </div>
  );
}
