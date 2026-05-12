const STEPS = [
  {
    step: '01 / Scope',
    title: 'Intro & brief',
    desc: 'One 45‑min call to align on what\'s actually being solved. A written brief lands the next morning.',
    dur: '~3 days',
  },
  {
    step: '02 / Shape',
    title: 'Prototype',
    desc: 'Working software, edited cut, or live landing page — never just slides. Real fidelity, fast feedback.',
    dur: '~2 weeks',
  },
  {
    step: '03 / Build',
    title: 'Production',
    desc: 'Daily Loom updates, Linear board open to you, no surprises on Friday. Code, footage, copy — all in one place.',
    dur: '~4‑8 weeks',
  },
  {
    step: '04 / Ship',
    title: 'Launch & hold',
    desc: 'We push the button with you, then stay on for 30 days minimum to fix what real users find.',
    dur: 'launch + 30d',
  },
];

export function ProcessGrid() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head">
          <div className="section-num mono">§ 03 / Process</div>
          <div>
            <h2 className="section-title">
              From first call <span className="dim">to launch</span>, in four moves.
            </h2>
            <p className="section-sub">
              Tight, opinionated, no‑surprise. We tell you what's possible in a week, ship the shape of it in two, and polish in four.
            </p>
          </div>
        </div>

        <div className="process-grid">
          {STEPS.map(s => (
            <div className="process-card" key={s.step}>
              <div className="step">{s.step}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <div className="dur">{s.dur}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
