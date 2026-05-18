interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, lede, children }: PageHeroProps) {
  return (
    <header className="pt-[7.5rem] pb-[3.75rem] border-b border-vl-line">
      <div className="container">
        <div className="mono text-[0.6875rem] text-vl-fg-muted uppercase tracking-[0.1em] inline-flex items-center gap-2 border border-vl-line rounded-full px-3 py-1.5 mb-7 reveal reveal--fade">
          <span className="w-1.5 h-1.5 rounded-full bg-vl-accent shadow-[0_0_0.375rem_var(--vl-accent)] shrink-0" />
          {eyebrow}
        </div>
        <h1
          className="text-[clamp(2.25rem,5vw,4rem)] font-medium tracking-[-0.03em] leading-[1.05] mb-5 max-w-[18ch] reveal"
          style={{ '--delay': '80ms' } as React.CSSProperties}
        >
          {title}
        </h1>
        <p
          className="text-base text-vl-fg-dim leading-[1.55] max-w-[56ch] reveal"
          style={{ '--delay': '160ms' } as React.CSSProperties}
        >
          {lede}
        </p>
        {children && (
          <div
            className="reveal"
            style={{ '--delay': '220ms' } as React.CSSProperties}
          >
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
