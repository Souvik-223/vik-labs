import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { WorkFilterTable } from '@/components/sections/WorkFilterTable';
import { StatsRow } from '@/components/sections/StatsRow';
import { CtaBlock } from '@/components/sections/CtaBlock';

export const metadata: Metadata = {
  title: 'Work — VikLabs',
  description: 'Selected work from VikLabs — software, video, and marketing projects.',
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="SELECTED WORK · 2024 — 2026"
        title={<>Things we&apos;ve <span className="dim">shipped, cut,</span> <span className="acc">and sold</span>.</>}
        lede="A sample of recent engagements. Some are under NDA; full case files available on request."
      >
        <WorkFilterTable />
      </PageHero>

      <StatsRow />

      <CtaBlock
        title={<>Want the <span className="dim">full case file</span>?</>}
        sub="Some of the best work isn't public. Drop a line — we'll send a private dossier with metrics, source files, and references."
        primaryLabel="Request dossier"
        primaryHref="/contact"
        secondaryLabel="See services"
        secondaryHref="/services"
      />
    </>
  );
}
