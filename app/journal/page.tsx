'use client';
import { useState } from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { JournalList } from '@/components/sections/JournalList';

function EmailSignup() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <section className="py-[6.25rem] text-center border-b border-vl-line">
      <div className="container">
        <div className="mono text-[0.6875rem] text-vl-fg-muted uppercase tracking-[0.08em] inline-flex items-center justify-center gap-2 mb-7 before:content-[''] before:w-1 before:h-1 before:bg-vl-accent before:rounded-full before:shrink-0 reveal reveal--fade">
          Newsletter · monthly · no spam
        </div>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-medium tracking-[-0.03em] leading-[1.05] mb-4 reveal" style={{ '--delay': '80ms' } as React.CSSProperties}>
          Get the journal <span className="dim">in your inbox</span>.
        </h2>
        <p className="text-base text-vl-fg-dim mb-8 max-w-[48ch] mx-auto reveal" style={{ '--delay': '160ms' } as React.CSSProperties}>
          One email a month. New entries, behind‑the‑scenes from shoots and ships, and the occasional studio note.
        </p>
        {subscribed ? (
          <p className="mono text-[0.8125rem] text-vl-accent">✓ subscribed</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-[27.5rem] mx-auto mt-6 flex gap-1.5 border border-vl-line rounded px-1 py-1 bg-vl-bg-2 reveal"
            style={{ '--delay': '220ms' } as React.CSSProperties}
          >
            <input
              type="email"
              placeholder="you@somewhere.com"
              required
              className="flex-1 bg-transparent border-none outline-none text-vl-fg mono text-xs px-3 py-2 placeholder:text-vl-fg-muted"
            />
            <button
              type="submit"
              className="mono text-xs bg-vl-fg text-vl-bg px-4 py-2 rounded-[0.1875rem] transition-colors duration-200 hover:bg-vl-accent hover:text-vl-accent-fg cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="JOURNAL · 14 ENTRIES"
        title={<>Notes on <span className="dim">building, cutting,</span> <span className="acc">and selling</span>.</>}
        lede="Field notes from inside the studio — what worked, what broke, and what we'd do differently. Sent out about once a month."
      />

      <section className="container py-[3.75rem] pb-10">
        <JournalList />
      </section>

      <EmailSignup />
    </>
  );
}
