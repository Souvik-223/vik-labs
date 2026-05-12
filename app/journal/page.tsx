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
    <section className="cta-block">
      <div className="container">
        <div className="section-label mono" style={{ justifyContent: 'center' }}>
          Newsletter · monthly · no spam
        </div>
        <h2>Get the journal <span className="dim">in your inbox</span>.</h2>
        <p className="sub">
          One email a month. New entries, behind‑the‑scenes from shoots and ships, and the occasional studio note.
        </p>
        {subscribed ? (
          <p className="mono" style={{ color: 'var(--vl-accent)', fontSize: '13px' }}>✓ subscribed</p>
        ) : (
          <form className="email-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="you@somewhere.com" required />
            <button type="submit">Subscribe</button>
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

      <section className="container" style={{ padding: '60px 20px 40px' }}>
        <JournalList />
      </section>

      <EmailSignup />
    </>
  );
}
