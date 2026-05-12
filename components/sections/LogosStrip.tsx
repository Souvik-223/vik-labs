const CLIENTS = ['Northwind', 'Looplabs', 'Halfdome', 'Arcade.fm', 'Polar Studio', 'Ferveo'];

export function LogosStrip() {
  return (
    <section className="container logos-strip">
      <span className="lbl">Worked with</span>
      <div className="logos-row">
        {CLIENTS.map(c => <span key={c}>{c}</span>)}
      </div>
    </section>
  );
}
