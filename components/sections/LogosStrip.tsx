const CLIENTS = ['Northwind', 'Looplabs', 'Halfdome', 'Arcade.fm', 'Polar Studio', 'Ferveo'];

export function LogosStrip() {
  return (
    <section className="border-b border-vl-line py-8 reveal reveal--fade">
      <div className="container flex items-center gap-10">
        <span className="mono text-[0.6875rem] text-vl-fg-muted uppercase tracking-[0.08em] shrink-0">Worked with</span>
        <div className="marquee-wrap flex-1 min-w-0">
          <div className="marquee-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={i}
                className="font-medium text-vl-fg-dim text-lg tracking-[-0.01em] pr-14 transition-colors duration-200 hover:text-vl-fg cursor-default"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
