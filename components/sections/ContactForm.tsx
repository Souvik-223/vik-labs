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
  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 9 L9 3 M5 3 H9 V7"/>
  </svg>
);

const inputCls = 'bg-vl-bg border border-vl-line rounded px-3 py-2.5 text-vl-fg font-sans text-sm outline-none transition-colors duration-200 focus:border-vl-accent placeholder:text-vl-fg-muted w-full';

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const time = useISTClock();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="container">
      <div className="grid grid-cols-[1.5fr_1fr] max-[56.25rem]:grid-cols-1 gap-[3.75rem] max-[56.25rem]:gap-8 py-[3.75rem] pb-20 max-[56.25rem]:py-10 max-[56.25rem]:pb-[3.75rem]">

        <form className="border border-vl-line rounded-md bg-vl-bg-2 p-6 flex flex-col gap-[1.125rem]" onSubmit={handleSubmit}>
          <div className="pb-3.5 mb-1.5 border-b border-vl-line mono text-[0.6875rem] text-vl-fg-muted flex justify-between uppercase tracking-[0.08em]">
            {sent ? <span className="text-vl-accent">● MESSAGE SENT</span> : <span>NEW / BRIEF</span>}
            <span>~12 hr reply</span>
          </div>

          {!sent ? (
            <>
              <div className="grid grid-cols-2 max-[56.25rem]:grid-cols-1 gap-[1.125rem]">
                <label className="flex flex-col gap-1.5">
                  <span className="mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.1em]">Name</span>
                  <input type="text" placeholder="Maya Reddy" required className={inputCls} />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.1em]">Company</span>
                  <input type="text" placeholder="Halfdome" className={inputCls} />
                </label>
              </div>
              <div className="grid grid-cols-2 max-[56.25rem]:grid-cols-1 gap-[1.125rem]">
                <label className="flex flex-col gap-1.5">
                  <span className="mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.1em]">Email</span>
                  <input type="email" placeholder="maya@halfdome.app" required className={inputCls} />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.1em]">Budget</span>
                  <select className={inputCls}>
                    <option>Not sure yet</option>
                    <option>Under $5k</option>
                    <option>$5k — $15k</option>
                    <option>$15k — $40k</option>
                    <option>$40k+</option>
                  </select>
                </label>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.1em]">What do you need?</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {NEEDS.map(n => (
                    <label key={n} className="mono text-[0.6875rem] text-vl-fg-dim border border-vl-line-2 rounded px-2.5 py-1.5 flex items-center gap-1.5 cursor-pointer transition-all duration-150 hover:border-vl-fg hover:text-vl-fg">
                      <input type="checkbox" className="accent-[var(--vl-accent)] m-0" /> {n}
                    </label>
                  ))}
                </div>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.1em]">Tell us the shape of it</span>
                <textarea placeholder="What are you building? When does it need to ship? What's gone wrong before?" rows={5} className={`${inputCls} resize-y min-h-[6.25rem]`} />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.1em]">Anything to share?</span>
                <input type="text" placeholder="Site, deck, Loom, GitHub — paste a link" className={inputCls} />
              </label>

              <div className="flex justify-between items-center gap-4 pt-2 border-t border-vl-line">
                <span className="mono text-[0.6875rem] text-vl-fg-muted">
                  By submitting, you agree we may reply. That&apos;s it.
                </span>
                <button type="submit" className="mono text-xs px-4 py-2.5 bg-vl-fg text-vl-bg border border-vl-fg rounded-[0.3125rem] inline-flex items-center gap-2 transition-all duration-200 hover:bg-vl-accent hover:text-vl-accent-fg hover:border-vl-accent whitespace-nowrap cursor-pointer">
                  Send brief <ArrowIcon />
                </button>
              </div>
            </>
          ) : (
            <p className="text-vl-fg-dim text-sm py-2">Thank you — we&apos;ll be in touch within 12 hours.</p>
          )}
        </form>

        <aside className="flex flex-col gap-6">
          <div className="border border-vl-line rounded-md bg-vl-bg-2 p-4">
            <h4 className="mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.1em] mb-2.5 font-medium">Email</h4>
            <Link href="mailto:hello@viklabs.io" className="text-vl-fg text-sm hover:text-vl-accent transition-colors duration-150">hello@viklabs.io</Link>
            <p className="mt-2 mono text-[0.6875rem] text-vl-fg-muted">PGP available on request</p>
          </div>
          <div className="border border-vl-line rounded-md bg-vl-bg-2 p-4">
            <h4 className="mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.1em] mb-2.5 font-medium">When</h4>
            <p className="text-[0.8125rem] text-vl-fg flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-vl-green shadow-[0_0_0.3125rem_var(--vl-green)] shrink-0" />
              Mon — Fri / 10:00 — 19:00 IST
            </p>
            <p className="mt-2 mono text-[0.6875rem] text-vl-fg-muted">Currently: <span className="text-vl-accent">{time}</span></p>
          </div>
          <div className="border border-vl-line rounded-md bg-vl-bg-2 p-4">
            <h4 className="mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.1em] mb-2.5 font-medium">Where</h4>
            <p className="text-[0.8125rem] text-vl-fg leading-[1.5]">Indiranagar, Bengaluru — 560038<br/>Remote first, on‑site for shoots.</p>
          </div>
          <div className="border border-vl-line rounded-md bg-vl-bg-2 p-4">
            <h4 className="mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.1em] mb-2.5 font-medium">Elsewhere</h4>
            <ul className="flex flex-col gap-1.5">
              {['X / @viklabs →', 'LinkedIn →', 'Read.cv →', 'Vimeo →'].map(l => (
                <li key={l}><Link href="#" className="text-[0.8125rem] text-vl-fg-dim hover:text-vl-fg transition-colors duration-150">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div className="border border-vl-line rounded-md bg-vl-bg-2 p-4">
            <h4 className="mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.1em] mb-2.5 font-medium">Not the right fit?</h4>
            <p className="text-[0.8125rem] text-vl-fg-dim">If we can&apos;t take the project, we&apos;ll point you to people who can. We keep a short list of studios we trust.</p>
          </div>
        </aside>

      </div>
    </section>
  );
}
