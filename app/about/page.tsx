import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { Beliefs } from '@/components/sections/Beliefs';
import { WorkTable } from '@/components/sections/WorkTable';
import { CtaBlock } from '@/components/sections/CtaBlock';

export const metadata: Metadata = {
  title: 'About — VikLabs',
  description: 'VikLabs is a small studio that builds the whole thing — code, cut, and copy.',
};

const TIMELINE = [
  {
    year: '2024',
    name: 'VikLabs founded',
    sub: 'Solo practice, Bengaluru',
    brief: 'First three engagements: a fintech rebuild, a launch film, and a brand site — all in the same quarter.',
    cat: 'Origin',
    year2: 'Q2',
  },
  {
    year: '2025',
    name: 'Studio of four',
    sub: 'Engineering · Film · Design',
    brief: 'Brought on three collaborators — full‑stack, motion, copy. Worked across India, US, Berlin.',
    cat: 'Scale',
    year2: 'Q1',
  },
  {
    year: '2026',
    name: 'Now',
    sub: 'Productized engagements',
    brief: 'Three engagement shapes: sprint, MVP build, retainer. Booking Q3.',
    cat: 'Today',
    year2: 'Q3',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT · EST. 2024"
        title={<>A small studio <span className="dim">that builds the whole thing</span> — <span className="acc">code, cut, and copy</span>.</>}
        lede="VikLabs started in 2024 as a one‑person practice and has grown into a small, hand‑picked team. We exist because most founders don't want three agencies; they want one team that ships."
      />

      <Beliefs />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-num mono">§ 02 / Founder</div>
            <div>
              <h2 className="section-title">
                Vikram — <span className="dim">engineer, editor, founder</span>.
              </h2>
              <p className="section-sub">
                Ex‑staff engineer turned indie filmmaker turned studio founder. Ten years of shipping web apps, six years of cutting video, three years of doing both at once.
              </p>
            </div>
          </div>

          <div className="founder-grid">
            <div>
              <p style={{ fontSize: '15px', color: 'var(--fg)', lineHeight: '1.65', maxWidth: '50ch', marginBottom: '20px' }}>
                I started VikLabs because I kept watching founders pay three different agencies to ship one thing — an engineering team that didn&apos;t know the story, an edit house that didn&apos;t know the product, and a marketing agency that didn&apos;t know either. The handoffs cost more than the work.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--fg-dim)', lineHeight: '1.65', maxWidth: '50ch' }}>
                VikLabs is the team I wanted to hire. Senior people who can hold three crafts at once, ship on a tight deadline, and care about the thing being good.
              </p>
            </div>
            <div className="founder-portrait">
              <div className="founder-portrait-placeholder">
                <span>[ founder portrait ]<br/>4:5 / B&amp;W</span>
              </div>
              <div className="founder-meta">
                <span className="mk">NAME</span>  <span>Vikram K.</span>
                <span className="mk">ROLE</span>  <span>Founder · Engineer · Director</span>
                <span className="mk">BASED</span> <span>Bengaluru, IN</span>
                <span className="mk">WRITES</span><span><Link href="/journal" style={{ color: 'var(--vl-accent)' }}>/ journal</Link></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-num mono">§ 03 / Timeline</div>
            <div>
              <h2 className="section-title">How we got <span className="dim">here</span>.</h2>
            </div>
          </div>
          <div className="work-table">
            {TIMELINE.map(t => (
              <div className="work-row" key={t.year} style={{ cursor: 'default' }}>
                <div className="mono text-dim">{t.year}</div>
                <div>
                  <div className="w-name">{t.name}</div>
                  <div className="w-sub">{t.sub}</div>
                </div>
                <div className="w-sub">{t.brief}</div>
                <div className="w-cat">{t.cat}</div>
                <div className="w-year">{t.year2}</div>
                <div />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        title={<>Like the way we <span className="dim">think</span>?</>}
        sub="Let's see if there's a project worth doing together."
        primaryLabel="Start a project"
        primaryHref="/contact"
        secondaryLabel="See the work first"
        secondaryHref="/work"
      />
    </>
  );
}
