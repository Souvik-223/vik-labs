import Link from 'next/link';

const ArrowIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 9 L9 3 M5 3 H9 V7"/>
  </svg>
);

interface CtaBlockProps {
  eyebrow?: string;
  title: React.ReactNode;
  sub: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export function CtaBlock({ eyebrow, title, sub, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: CtaBlockProps) {
  return (
    <section className="py-[6.25rem] text-center border-b border-vl-line">
      <div className="container">
        {eyebrow && (
          <div className="mono text-[0.6875rem] text-vl-fg-muted uppercase tracking-[0.08em] inline-flex items-center justify-center gap-2 mb-7 before:content-[''] before:w-1 before:h-1 before:bg-vl-accent before:rounded-full before:shrink-0">
            {eyebrow}
          </div>
        )}
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-medium tracking-[-0.03em] leading-[1.05] mb-4">{title}</h2>
        <p className="text-base text-vl-fg-dim mb-8 max-w-[48ch] mx-auto">{sub}</p>
        <div className="flex gap-2.5 justify-center flex-wrap">
          <Link href={primaryHref} className="mono text-xs px-4 py-2.5 bg-vl-fg text-vl-bg border border-vl-fg rounded-[0.3125rem] inline-flex items-center gap-2 transition-all duration-200 hover:bg-vl-accent hover:text-vl-accent-fg hover:border-vl-accent whitespace-nowrap">
            {primaryLabel}
            <ArrowIcon />
          </Link>
          <Link href={secondaryHref} className="mono text-xs px-4 py-2.5 bg-transparent text-vl-fg border border-vl-line-2 rounded-[0.3125rem] inline-flex items-center gap-2 transition-all duration-200 hover:border-vl-fg hover:bg-vl-bg-2 whitespace-nowrap">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
