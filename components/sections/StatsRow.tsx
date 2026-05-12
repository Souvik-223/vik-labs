const STATS = [
  { value: '42', suffix: '+', label: 'projects shipped' },
  { value: '11', suffix: '',  label: 'countries'        },
  { value: '6.4M', suffix: '',label: 'video impressions'},
  { value: '98', suffix: '%', label: 'on‑time delivery' },
];

export function StatsRow() {
  return (
    <section className="stats-row">
      {STATS.map(s => (
        <div className="stat" key={s.label}>
          <div className="v">
            {s.value}<span className="acc">{s.suffix}</span>
          </div>
          <div className="k mono">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
