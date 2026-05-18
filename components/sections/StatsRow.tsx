const STATS = [
  { value: '42',   suffix: '+', label: 'projects shipped'  },
  { value: '11',   suffix: '',  label: 'countries'          },
  { value: '6.4M', suffix: '',  label: 'video impressions'  },
  { value: '98',   suffix: '%', label: 'on‑time delivery'   },
];

export function StatsRow() {
  return (
    <section className="grid grid-cols-4 max-[56.25rem]:grid-cols-2 border-t border-b border-vl-line bg-vl-bg-2">
      {STATS.map(s => (
        <div key={s.label} className="p-7 border-r border-vl-line last:border-r-0 max-[56.25rem]:border-r-0 max-[56.25rem]:border-b max-[56.25rem]:border-vl-line">
          <div className="text-[2.25rem] font-medium tracking-[-0.02em] text-vl-fg mb-1">
            {s.value}<span className="acc">{s.suffix}</span>
          </div>
          <div className="mono text-[0.6875rem] text-vl-fg-muted uppercase tracking-[0.08em]">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
