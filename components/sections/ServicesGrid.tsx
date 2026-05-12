import Link from 'next/link';

const SERVICES = [
  {
    num: '01',
    slug: 'dev',
    label: 'Software',
    title: 'Software studio',
    desc: 'Production web apps, internal tools, and AI‑backed workflows. Designed, built, and maintained by senior engineers who care about TTFI as much as TCO.',
    tools: ['Next.js', 'TypeScript', 'Postgres', 'tRPC', 'Tailwind', 'Stripe'],
    price: 'From ₹4L · 2-week sprints',
    href: '/services#software',
  },
  {
    num: '02',
    slug: 'film',
    label: 'Video',
    title: 'Video & film',
    desc: 'Launch films, founder stories, product demos, and short‑form motion that doesn\'t feel templated. We handle direction, edit, color, sound — end to end.',
    tools: ['DaVinci', 'Premiere', 'After Effects', 'Cinema 4D', 'FL Studio'],
    price: 'From ₹2L · per deliverable',
    href: '/services#video',
  },
  {
    num: '03',
    slug: 'gtm',
    label: 'Marketing',
    title: 'Product marketing',
    desc: 'Positioning, narrative, landing pages, lifecycle, and paid experiments. We work like a fractional product‑marketing team for founders who don\'t have one yet.',
    tools: ['Positioning', 'Lifecycle', 'SEO', 'Paid', 'Analytics'],
    price: 'From ₹1.5L / mo · retainer',
    href: '/services#marketing',
  },
];

export function ServicesGrid() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="section-num mono">§ 01 / Services</div>
          <div>
            <h2 className="section-title">
              Three crafts, <span className="dim">run by one team</span>.
            </h2>
            <p className="section-sub">
              We don't hand off between disciplines. The engineer who ships the feature is in the room when we cut the launch video and write the email. Less translation, faster output.
            </p>
          </div>
        </div>

        <div className="svc-grid">
          {SERVICES.map(s => (
            <article className="svc-card reveal" key={s.num}>
              <div className="svc-card-head">
                <span><span className="num">{s.num}</span> · {s.label}</span>
                <span>./{s.slug}</span>
              </div>
              <div className="svc-card-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="svc-tools">
                  {s.tools.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="svc-card-foot">
                <span>{s.price}</span>
                <Link href={s.href}>view spec →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
