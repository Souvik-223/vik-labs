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

export function ServiceDetailRow({ num, slug, name, tagline, body, items, pricing, noBorder }: ServiceDetailRowProps) {
  return (
    <section className="container" id={slug}>
      <div className={`grid grid-cols-[17.5rem_1fr] max-[56.25rem]:grid-cols-1 gap-[3.75rem] max-[56.25rem]:gap-6 py-[3.75rem] max-[56.25rem]:py-10${noBorder ? '' : ' border-b border-vl-line'}`}>
        <div className="sticky top-[6.25rem] max-[56.25rem]:static self-start reveal reveal--left">
          <div className="mono text-[0.6875rem] text-vl-accent mb-4 tracking-[0.08em]">{num}</div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.02em] leading-[1] mb-3">{name}</h2>
          <p className="mono text-xs text-vl-fg-dim max-w-[28ch]">{tagline}</p>
        </div>
        <div className="reveal" style={{ '--delay': '150ms' } as React.CSSProperties}>
          <p className="text-base leading-[1.55] text-vl-fg max-w-[56ch] mb-7">{body}</p>
          <div className="grid grid-cols-2 max-[56.25rem]:grid-cols-1 gap-[0.625rem_1.5rem] mb-8">
            {items.map((item, i) => (
              <div
                key={item}
                className="text-[0.8125rem] text-vl-fg-dim flex gap-2.5 reveal"
                style={{ '--delay': `${200 + i * 40}ms` } as React.CSSProperties}
              >
                <span className="text-vl-accent shrink-0">✓</span>{item}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 max-[56.25rem]:grid-cols-1 border border-vl-line rounded-md overflow-hidden bg-vl-bg-2 reveal" style={{ '--delay': '160ms' } as React.CSSProperties}>
            {pricing.map((p, i) => (
              <div key={p.label} className={`p-3.5 mono text-[0.8125rem] text-vl-fg${i < pricing.length - 1 ? ' border-r max-[56.25rem]:border-r-0 max-[56.25rem]:border-b border-vl-line' : ''}`}>
                <span className="block text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.08em] mb-1">{p.label}</span>
                {p.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
