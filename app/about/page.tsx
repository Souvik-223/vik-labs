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
    quarter: 'Q2',
  },
  {
    year: '2025',
    name: 'Studio of four',
    sub: 'Engineering · Film · Design',
    brief: 'Brought on three collaborators — full‑stack, motion, copy. Worked across India, US, Berlin.',
    cat: 'Scale',
    quarter: 'Q1',
  },
  {
    year: '2026',
    name: 'Now',
    sub: 'Productized engagements',
    brief: 'Three engagement shapes: sprint, MVP build, retainer. Booking Q3.',
    cat: 'Today',
    quarter: 'Q3',
  },
];

const rowCls = 'grid grid-cols-[50px_1.4fr_1.8fr_1.4fr_80px_40px] max-[900px]:grid-cols-1 gap-4 max-[900px]:gap-1 items-center px-4 py-[14px] max-[900px]:py-4 mono text-[12px] border-b border-vl-line last:border-b-0';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT · EST. 2024"
        title={<>A small studio <span className="dim">that builds the whole thing</span> — <span className="acc">code, cut, and copy</span>.</>}
        lede="VikLabs started in 2024 as a one‑person practice and has grown into a small, hand‑picked team. We exist because most founders don't want three agencies; they want one team that ships."
      />

      <Beliefs />

      <section className="py-20 max-[56.25rem]:py-[3.75rem] border-b border-vl-line">
        <div className="container">
          <div className="grid grid-cols-[12.5rem_1fr] max-[56.25rem]:grid-cols-1 gap-[3.75rem] max-[56.25rem]:gap-4 mb-12 max-[56.25rem]:mb-8 items-start">
            <div className="mono text-xs text-vl-fg-muted">§ 02 / Founder</div>
            <div>
              <h2 className="text-[clamp(1.625rem,3vw,2.375rem)] font-medium tracking-[-0.02em] leading-[1.15] mb-3 max-w-[22ch]">
                Vikram — <span className="dim">engineer, editor, founder</span>.
              </h2>
              <p className="text-[0.9375rem] text-vl-fg-dim max-w-[50ch]">
                Ex‑staff engineer turned indie filmmaker turned studio founder. Ten years of shipping web apps, six years of cutting video, three years of doing both at once.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 max-[56.25rem]:grid-cols-1 gap-[3.75rem] max-[56.25rem]:gap-8 items-start">
            <div>
              <p className="text-[15px] text-vl-fg leading-[1.65] max-w-[50ch] mb-5">
                I started VikLabs because I kept watching founders pay three different agencies to ship one thing — an engineering team that didn&apos;t know the story, an edit house that didn&apos;t know the product, and a marketing agency that didn&apos;t know either. The handoffs cost more than the work.
              </p>
              <p className="text-[15px] text-vl-fg-dim leading-[1.65] max-w-[50ch]">
                VikLabs is the team I wanted to hire. Senior people who can hold three crafts at once, ship on a tight deadline, and care about the thing being good.
              </p>
            </div>
            <div className="border border-vl-line rounded-md bg-vl-bg-2 overflow-hidden">
              <div
                className="relative flex items-center justify-center aspect-[4/5]"
                style={{ background: 'repeating-linear-gradient(45deg, var(--bg-3) 0 10px, var(--bg-2) 10px 20px)' }}
              >
                <span className="mono text-[11px] text-vl-fg-muted text-center leading-[1.6]">
                  [ founder portrait ]<br/>4:5 / B&amp;W
                </span>
              </div>
              <div className="p-4 grid grid-cols-[auto_1fr] gap-3 gap-x-[14px] mono text-[11px] border-t border-vl-line">
                <span className="text-vl-fg-muted">NAME</span>  <span>Vikram K.</span>
                <span className="text-vl-fg-muted">ROLE</span>  <span>Founder · Engineer · Director</span>
                <span className="text-vl-fg-muted">BASED</span> <span>Bengaluru, IN</span>
                <span className="text-vl-fg-muted">WRITES</span>
                <span><Link href="/journal" className="text-vl-accent">/ journal</Link></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[80px] max-[900px]:py-[60px] border-b border-vl-line">
        <div className="container">
          <div className="grid grid-cols-[200px_1fr] max-[900px]:grid-cols-1 gap-[60px] max-[900px]:gap-4 mb-12 max-[900px]:mb-8 items-start">
            <div className="mono text-[12px] text-vl-fg-muted">§ 03 / Timeline</div>
            <div>
              <h2 className="text-[clamp(26px,3vw,38px)] font-medium tracking-[-0.02em] leading-[1.15] mb-3 max-w-[22ch]">
                How we got <span className="dim">here</span>.
              </h2>
            </div>
          </div>
          <div className="border border-vl-line rounded-md overflow-hidden bg-vl-bg-2">
            <div className="grid grid-cols-[50px_1.4fr_1.8fr_1.4fr_80px_40px] max-[900px]:hidden gap-4 items-center px-4 py-[14px] bg-vl-bg-3 border-b border-vl-line mono text-[10px] text-vl-fg-muted uppercase tracking-[0.08em]">
              <div>Year</div><div>Milestone</div><div>Context</div><div>Stage</div><div>Quarter</div><div />
            </div>
            {TIMELINE.map(t => (
              <div className={rowCls} key={t.year}>
                <div className="text-vl-fg-dim">{t.year}</div>
                <div>
                  <div className="font-sans text-[16px] text-vl-fg font-medium tracking-[-0.01em]">{t.name}</div>
                  <div className="text-vl-fg-dim">{t.sub}</div>
                </div>
                <div className="text-vl-fg-dim">{t.brief}</div>
                <div className="text-vl-fg-muted uppercase tracking-[0.06em] text-[10px]">{t.cat}</div>
                <div className="text-vl-fg">{t.quarter}</div>
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
