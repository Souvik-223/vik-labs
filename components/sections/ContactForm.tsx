'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useISTClock } from '@/hooks/use-ist-clock';

const NEEDS = [
  'Software build', 'Software rebuild', 'Launch film',
  'Product demo', 'Positioning', 'Landing page',
  'Lifecycle email', 'Just exploring',
];

const ArrowIcon = () => (
  <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 9 L9 3 M5 3 H9 V7"/>
  </svg>
);

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const time = useISTClock();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="container">
      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-head">
            {sent
              ? <span style={{ color: 'var(--vl-accent)' }}>● MESSAGE SENT</span>
              : <span>NEW / BRIEF</span>
            }
            <span>~12 hr reply</span>
          </div>

          {!sent ? (
            <>
              <div className="form-row">
                <label>
                  <span>Name</span>
                  <input type="text" placeholder="Maya Reddy" required />
                </label>
                <label>
                  <span>Company</span>
                  <input type="text" placeholder="Halfdome" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span>Email</span>
                  <input type="email" placeholder="maya@halfdome.app" required />
                </label>
                <label>
                  <span>Budget</span>
                  <select>
                    <option>Not sure yet</option>
                    <option>Under ₹5L</option>
                    <option>₹5L — ₹15L</option>
                    <option>₹15L — ₹40L</option>
                    <option>₹40L+</option>
                  </select>
                </label>
              </div>

              <label className="full">
                <span>What do you need?</span>
                <div className="checkbox-row">
                  {NEEDS.map(n => (
                    <label className="chk" key={n}>
                      <input type="checkbox" /> {n}
                    </label>
                  ))}
                </div>
              </label>

              <label className="full">
                <span>Tell us the shape of it</span>
                <textarea
                  placeholder="What are you building? When does it need to ship? What's gone wrong before?"
                  rows={5}
                />
              </label>

              <label className="full">
                <span>Anything to share?</span>
                <input type="text" placeholder="Site, deck, Loom, GitHub — paste a link" />
              </label>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', paddingTop: '8px', borderTop: '1px solid var(--line)' }}>
                <span className="mono" style={{ fontSize: '11px', color: 'var(--fg-muted)' }}>
                  By submitting, you agree we may reply. That&apos;s it.
                </span>
                <button type="submit" className="btn primary">
                  Send brief <ArrowIcon />
                </button>
              </div>
            </>
          ) : (
            <p style={{ color: 'var(--fg-dim)', fontSize: '14px', padding: '8px 0' }}>
              Thank you — we&apos;ll be in touch within 12 hours.
            </p>
          )}
        </form>

        <aside className="contact-side">
          <div className="side-block">
            <h4>Email</h4>
            <Link href="mailto:hello@viklabs.io">hello@viklabs.io</Link>
            <p style={{ marginTop: '8px', fontFamily: 'var(--font-geist-mono)', fontSize: '11px', color: 'var(--fg-muted)' }}>
              PGP available on request
            </p>
          </div>
          <div className="side-block">
            <h4>When</h4>
            <p><span className="dot-live" />Mon — Fri / 10:00 — 19:00 IST</p>
            <p style={{ marginTop: '8px', fontFamily: 'var(--font-geist-mono)', fontSize: '11px', color: 'var(--fg-muted)' }}>
              Currently: <span style={{ color: 'var(--vl-accent)' }}>{time}</span>
            </p>
          </div>
          <div className="side-block">
            <h4>Where</h4>
            <p>Indiranagar, Bengaluru — 560038<br/>Remote first, on‑site for shoots.</p>
          </div>
          <div className="side-block">
            <h4>Elsewhere</h4>
            <ul className="side-links">
              <li><Link href="#">X / @viklabs →</Link></li>
              <li><Link href="#">LinkedIn →</Link></li>
              <li><Link href="#">Read.cv →</Link></li>
              <li><Link href="#">Vimeo →</Link></li>
            </ul>
          </div>
          <div className="side-block">
            <h4>Not the right fit?</h4>
            <p style={{ fontSize: '13px', color: 'var(--fg-dim)' }}>
              If we can&apos;t take the project, we&apos;ll point you to people who can. We keep a short list of studios we trust.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
