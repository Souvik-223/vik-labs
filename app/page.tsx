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

      <section className="py-20 max-[56.25rem]:py-[3.75rem] border-b border-vl-line" id="work">
        <div className="container">
          <div className="grid grid-cols-[12.5rem_1fr] max-[56.25rem]:grid-cols-1 gap-[3.75rem] max-[56.25rem]:gap-4 mb-12 max-[56.25rem]:mb-8 items-start">
            <div className="mono text-xs text-vl-fg-muted reveal reveal--left">§ 02 / Work</div>
            <div>
              <h2 className="text-[clamp(1.625rem,3vw,2.375rem)] font-medium tracking-[-0.02em] leading-[1.15] mb-3 max-w-[22ch] reveal">
                A few things we&apos;ve <span className="dim">shipped, cut, and sold</span>.
              </h2>
              <p className="text-[0.9375rem] text-vl-fg-dim max-w-[50ch] reveal" style={{ '--delay': '80ms' } as React.CSSProperties}>
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
