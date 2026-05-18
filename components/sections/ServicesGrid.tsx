import Link from 'next/link';

const SERVICES = [
  {
    num: '01', slug: 'dev', label: 'Software', title: 'Software studio',
    desc: 'Production web apps, internal tools, and AI‑backed workflows. Designed, built, and maintained by senior engineers who care about TTFI as much as TCO.',
    tools: ['Next.js', 'TypeScript', 'Postgres', 'tRPC', 'Tailwind', 'Stripe'],
    price: 'From $4,800 · 2-week sprints', href: '/services#software',
  },
  {
    num: '02', slug: 'film', label: 'Video', title: 'Video & film',
    desc: 'Launch films, founder stories, product demos, and short‑form motion that doesn\'t feel templated. We handle direction, edit, color, sound — end to end.',
    tools: ['DaVinci', 'Premiere', 'After Effects', 'Cinema 4D', 'FL Studio'],
    price: 'From $2,400 · per deliverable', href: '/services#video',
  },
  {
    num: '03', slug: 'gtm', label: 'Marketing', title: 'Product marketing',
    desc: 'Positioning, narrative, landing pages, lifecycle, and paid experiments. We work like a fractional product‑marketing team for founders who don\'t have one yet.',
    tools: ['Positioning', 'Lifecycle', 'SEO', 'Paid', 'Analytics'],
    price: 'From $1,800 / mo · retainer', href: '/services#marketing',
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 max-[56.25rem]:py-[3.75rem] border-b border-vl-line" id="services">
      <div className="container">
        <div className="grid grid-cols-[12.5rem_1fr] max-[56.25rem]:grid-cols-1 gap-[3.75rem] max-[56.25rem]:gap-4 mb-12 max-[56.25rem]:mb-8 items-start">
          <div className="mono text-xs text-vl-fg-muted">§ 01 / Services</div>
          <div>
            <h2 className="text-[clamp(1.625rem,3vw,2.375rem)] font-medium tracking-[-0.02em] leading-[1.15] mb-3 max-w-[22ch]">
              Three crafts, <span className="dim">run by one team</span>.
            </h2>
            <p className="text-[0.9375rem] text-vl-fg-dim max-w-[50ch]">
              We don&apos;t hand off between disciplines. The engineer who ships the feature is in the room when we cut the launch video and write the email. Less translation, faster output.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 max-[56.25rem]:grid-cols-1 gap-4">
          {SERVICES.map(s => (
            <article key={s.num} className="border border-vl-line rounded-md bg-vl-bg-2 overflow-hidden flex flex-col transition-all duration-200 hover:border-vl-line-2 hover:-translate-y-0.5 reveal">
              <div className="px-4 py-3 border-b border-vl-line flex items-center justify-between mono text-[0.6875rem] text-vl-fg-muted">
                <span><span className="text-vl-accent">{s.num}</span> · {s.label}</span>
                <span>./{s.slug}</span>
              </div>
              <div className="p-4 pt-6 flex-1 flex flex-col">
                <h3 className="text-[1.625rem] font-medium tracking-[-0.02em] mb-3">{s.title}</h3>
                <p className="text-sm text-vl-fg-dim leading-[1.55] mb-5">{s.desc}</p>
                <div className="mt-auto pt-4 border-t border-vl-line flex flex-wrap gap-1.5">
                  {s.tools.map(t => (
                    <span key={t} className="mono text-[0.625rem] text-vl-fg-dim bg-vl-bg-3 px-[0.4375rem] py-[0.1875rem] rounded-[0.1875rem]">{t}</span>
                  ))}
                </div>
              </div>
              <div className="px-4 py-3 border-t border-vl-line flex justify-between items-center mono text-[0.6875rem] text-vl-fg-muted">
                <span>{s.price}</span>
                <Link href={s.href} className="text-vl-accent hover:underline">view spec →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
