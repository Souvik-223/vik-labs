import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { ServiceDetailRow } from '@/components/sections/ServiceDetailRow';
import { CtaBlock } from '@/components/sections/CtaBlock';

export const metadata: Metadata = {
  title: 'Services — VikLabs',
  description: 'Three disciplines, one team, one timeline. Software, video, and marketing from a single studio.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title={<>Build, film, <span className="dim">and launch</span> — <span className="acc">end to end</span>.</>}
        lede="Three disciplines, one team, one timeline. We take a single brief and return software, video, and marketing — not three vendors copy‑pasting Slack messages."
      />

      <ServiceDetailRow
        num="01 / ./dev"
        slug="software"
        name={<>Software<br/>studio</>}
        tagline="Senior full‑stack work. Ship‑shaped, not slide‑shaped."
        body="We build production web apps from zero, rebuild stuck legacy ones, and add AI features to existing products. Senior engineers only — no junior pass‑throughs. Every project ships with tests, docs, and a runway you can hand to your own team on day one."
        items={[
          'Greenfield MVPs in Next.js',
          'Legacy rebuilds & migrations',
          'AI features & agent workflows',
          'Internal tools & admin panels',
          'Auth, payments, and compliance',
          'Design systems & component libs',
        ]}
        pricing={[
          { label: 'Sprint',     value: '$4,800 / 2 wks'  },
          { label: 'MVP build',  value: '$16,500 / 6–8 wks' },
          { label: 'Retainer',   value: '$4,200 / mo'     },
        ]}
      />

      <ServiceDetailRow
        num="02 / ./film"
        slug="video"
        name={<>Video<br/>&amp; film</>}
        tagline="Direction → edit → color → sound. One studio, one cut."
        body="Launch films, founder interviews, product demos, motion graphics, and short‑form social. We script, shoot, edit, color, and sound‑design in‑house, with motion graphics that match your product's actual UI — not a stock template."
        items={[
          'Launch & brand films',
          'Founder & customer stories',
          'Product demos & walkthroughs',
          'Motion graphics & UI animation',
          'Short‑form social cuts',
          'Original score & sound design',
        ]}
        pricing={[
          { label: 'Single cut',       value: '$2,400 / deliverable' },
          { label: 'Launch package',   value: '$7,200 / 4 wks'       },
          { label: 'Content retainer', value: '$3,000 / mo'           },
        ]}
      />

      <ServiceDetailRow
        num="03 / ./gtm"
        slug="marketing"
        name={<>Product<br/>marketing</>}
        tagline="Positioning, narrative, demand. Treated like product, not promo."
        body="We act as your fractional product‑marketing team. Positioning rewrites, narrative work, landing pages, lifecycle email, and paid experiments — all measured against signups, activation, and revenue, not vanity metrics."
        items={[
          'Positioning & narrative',
          'Landing pages that convert',
          'Lifecycle & onboarding email',
          'SEO & programmatic content',
          'Paid experiments (LinkedIn / Meta)',
          'Activation & funnel analytics',
        ]}
        pricing={[
          { label: 'Positioning',    value: '$3,600 / 3 wks'  },
          { label: 'Launch sprint',  value: '$7,200 / 4 wks'  },
          { label: 'Retainer',       value: '$1,800+ / mo'    },
        ]}
        noBorder
      />

      <CtaBlock
        eyebrow="Engagements / Q3 2026"
        title={<>Pick a slot. <span className="dim">We&apos;ll bring the brief.</span></>}
        sub="45 minutes, no slides. We'll tell you what's possible and what isn't, and send a written scope by morning."
        primaryLabel="Book intro call"
        primaryHref="/contact"
        secondaryLabel="See selected work"
        secondaryHref="/work"
      />
    </>
  );
}
