import { HeroSection } from '@/components/sections/HeroSection';
import { LogosStrip } from '@/components/sections/LogosStrip';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { StatsRow } from '@/components/sections/StatsRow';
import { WorkTable } from '@/components/sections/WorkTable';
import { ProcessGrid } from '@/components/sections/ProcessGrid';
import { QuoteBlock } from '@/components/sections/QuoteBlock';
import { CtaBlock } from '@/components/sections/CtaBlock';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogosStrip />
      <ServicesGrid />
      <StatsRow />

      <section className="section" id="work">
        <div className="container">
          <div className="section-head">
            <div className="section-num mono">§ 02 / Work</div>
            <div>
              <h2 className="section-title">
                A few things we&apos;ve <span className="dim">shipped, cut, and sold</span>.
              </h2>
              <p className="section-sub">
                Six recent engagements. NDAs trim the list. Ask for the full case files when we talk.
              </p>
            </div>
          </div>
          <WorkTable limit={6} />
        </div>
      </section>

      <ProcessGrid />
      <QuoteBlock />
      <CtaBlock
        eyebrow="Open for Q3 collaborations"
        title={<>Got a thing you need <span className="dim">built, filmed,</span> <span className="acc">or launched?</span></>}
        sub="Send a few lines. We reply within 12 hours with whether we're the right fit — and if not, who is."
        primaryLabel="Start a project"
        primaryHref="/contact"
        secondaryLabel="hello@viklabs.io"
        secondaryHref="mailto:hello@viklabs.io"
      />
    </>
  );
}
