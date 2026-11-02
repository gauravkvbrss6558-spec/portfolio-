interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      {description && <p className="mt-6 leading-relaxed text-cream/70">{description}</p>}
    </div>
  );
}
