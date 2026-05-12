interface Pricing {
  label: string;
  value: string;
}

interface ServiceDetailRowProps {
  num: string;
  slug: string;
  name: React.ReactNode;
  tagline: string;
  body: string;
  items: string[];
  pricing: Pricing[];
  noBorder?: boolean;
}

export function ServiceDetailRow({
  num, slug, name, tagline, body, items, pricing, noBorder,
}: ServiceDetailRowProps) {
  return (
    <section className="container" id={slug}>
      <div className="svc-detail-row" style={noBorder ? { borderBottom: 'none' } : undefined}>
        <div className="svc-detail-meta">
          <div className="svc-num">{num}</div>
          <h2 className="svc-name">{name}</h2>
          <p className="svc-tagline">{tagline}</p>
        </div>
        <div className="svc-detail-body">
          <p>{body}</p>
          <div className="svc-list">
            {items.map(item => (
              <div key={item}>
                <span className="check">✓</span> {item}
              </div>
            ))}
          </div>
          <div className="svc-pricing">
            {pricing.map(p => (
              <div key={p.label}>
                <span className="lbl">{p.label}</span>
                {p.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
