const CLIENTS = ['Northwind', 'Looplabs', 'Halfdome', 'Arcade.fm', 'Polar Studio', 'Ferveo'];

export function LogosStrip() {
  return (
    <section className="container border-b border-vl-line py-8 flex items-center justify-between gap-6 flex-wrap">
      <span className="mono text-[0.6875rem] text-vl-fg-muted uppercase tracking-[0.08em] shrink-0">Worked with</span>
      <div className="flex gap-10 items-center font-medium text-vl-fg-dim text-lg tracking-[-0.01em] flex-wrap">
        {CLIENTS.map(c => <span key={c}>{c}</span>)}
      </div>
    </section>
  );
}
