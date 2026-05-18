import Link from 'next/link';

const ArrowIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 9 L9 3 M5 3 H9 V7"/>
  </svg>
);

const SIDE_ROWS = [
  { k: 'Founder',     v: 'Vikram — full‑stack & film',           accent: false },
  { k: 'Based',       v: 'Bengaluru · remote first',              accent: false },
  { k: 'Stack',       v: 'Next.js · TS · Postgres · DaVinci · Figma', accent: false },
  { k: 'Engagements', v: 'Sprint · Retainer · Production',        accent: false },
  { k: 'Booking',     v: 'Q3 — 2 slots remain',                   accent: true  },
  { k: 'Reply',       v: 'Under 12 hours',                        accent: false },
];

export function HeroSection() {
  return (
    <header className="pt-[8.75rem] pb-20 max-[56.25rem]:pt-[6.875rem] max-[56.25rem]:pb-[3.75rem] border-b border-vl-line">
      <div className="container grid grid-cols-[1.4fr_1fr] max-[56.25rem]:grid-cols-1 gap-20 max-[56.25rem]:gap-10 items-end">

        <div>
          <div
            className="mono text-[0.6875rem] text-vl-fg-muted uppercase tracking-[0.08em] inline-flex items-center gap-2 mb-7 before:content-[''] before:w-1 before:h-1 before:bg-vl-accent before:rounded-full before:shrink-0 reveal"
          >
            VL—001 · Studio
          </div>
          <h1
            className="text-[clamp(2.25rem,5vw,4rem)] font-medium tracking-[-0.025em] leading-[1.05] mb-6 max-w-[16ch] reveal"
            style={{ '--delay': '80ms' } as React.CSSProperties}
          >
            Engineering, film &amp; story<br/>
            for products <span className="dim">that need to ship,</span>{' '}
            <span className="acc">then sell.</span>
          </h1>
          <p
            className="text-[1.0625rem] leading-[1.55] text-vl-fg-dim max-w-[52ch] mb-8 reveal"
            style={{ '--delay': '160ms' } as React.CSSProperties}
          >
            <strong className="text-vl-fg font-medium">VikLabs</strong> is a small product studio building software, cutting video, and running marketing for founders who want one team handling all three — without the agency overhead.
          </p>
          <div
            className="flex gap-2.5 flex-wrap reveal"
            style={{ '--delay': '240ms' } as React.CSSProperties}
          >
            <Link href="/work" className="mono text-xs px-4 py-2.5 bg-vl-fg text-vl-bg border border-vl-fg rounded-[0.3125rem] inline-flex items-center gap-2 transition-all duration-200 hover:bg-vl-accent hover:text-vl-accent-fg hover:border-vl-accent whitespace-nowrap">
              See selected work
              <ArrowIcon />
            </Link>
            <Link href="/contact" className="mono text-xs px-4 py-2.5 bg-transparent text-vl-fg border border-vl-line-2 rounded-[0.3125rem] inline-flex items-center gap-2 transition-all duration-200 hover:border-vl-fg hover:bg-vl-bg-2 whitespace-nowrap">
              Book intro call
            </Link>
          </div>
        </div>

        <aside
          className="border border-vl-line rounded-md bg-vl-bg-2 overflow-hidden reveal reveal--right"
          style={{ '--delay': '300ms' } as React.CSSProperties}
        >
          <div className="px-3.5 py-2.5 border-b border-vl-line flex items-center justify-between mono text-[0.6875rem] text-vl-fg-dim">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-vl-green pulse-dot shrink-0" />
              SESSION / open
            </span>
            <span>0x01</span>
          </div>
          {SIDE_ROWS.map(row => (
            <div key={row.k} className="px-3.5 py-3 grid grid-cols-[6.25rem_1fr] gap-3.5 mono text-xs border-b border-vl-line last:border-b-0">
              <div className="text-vl-fg-muted uppercase tracking-[0.06em] text-[0.625rem] self-center">{row.k}</div>
              <div className={row.accent ? 'text-vl-accent' : 'text-vl-fg'}>{row.v}</div>
            </div>
          ))}
        </aside>

      </div>
    </header>
  );
}
