import Link from 'next/link';

const ArrowIcon = () => (
  <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 9 L9 3 M5 3 H9 V7"/>
  </svg>
);

export function HeroSection() {
  return (
    <header className="hero">
      <div className="container hero-grid">
        <div className="reveal">
          <div className="section-label mono">VL—001 · Studio</div>
          <h1>
            Engineering, film &amp; story<br/>
            for products <span className="dim">that need to ship,</span>{' '}
            <span className="acc">then sell.</span>
          </h1>
          <p className="hero-lede">
            <strong>VikLabs</strong> is a small product studio building software, cutting video, and running marketing for founders who want one team handling all three — without the agency overhead.
          </p>
          <div className="hero-actions">
            <Link href="/work" className="btn primary">
              See selected work
              <ArrowIcon />
            </Link>
            <Link href="/contact" className="btn">
              Book intro call
            </Link>
          </div>
        </div>

        <aside className="hero-side reveal">
          <div className="hero-side-head">
            <span><span className="dot" /> SESSION / open</span>
            <span>0x01</span>
          </div>
          <div className="hero-side-row">
            <div className="k">Founder</div>
            <div className="v">Vikram — full‑stack &amp; film</div>
          </div>
          <div className="hero-side-row">
            <div className="k">Based</div>
            <div className="v">Bengaluru · remote first</div>
          </div>
          <div className="hero-side-row">
            <div className="k">Stack</div>
            <div className="v">Next.js · TS · Postgres · DaVinci · Figma</div>
          </div>
          <div className="hero-side-row">
            <div className="k">Engagements</div>
            <div className="v">Sprint · Retainer · Production</div>
          </div>
          <div className="hero-side-row">
            <div className="k">Booking</div>
            <div className="v acc">Q3 — 2 slots remain</div>
          </div>
          <div className="hero-side-row">
            <div className="k">Reply</div>
            <div className="v">Under 12 hours</div>
          </div>
        </aside>
      </div>
    </header>
  );
}
