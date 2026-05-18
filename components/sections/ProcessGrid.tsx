const STEPS = [
  { step: '01 / Scope', title: 'Intro & brief',  desc: 'One 45‑min call to align on what\'s actually being solved. A written brief lands the next morning.', dur: '~3 days'       },
  { step: '02 / Shape', title: 'Prototype',       desc: 'Working software, edited cut, or live landing page — never just slides. Real fidelity, fast feedback.', dur: '~2 weeks'    },
  { step: '03 / Build', title: 'Production',      desc: 'Daily Loom updates, Linear board open to you, no surprises on Friday. Code, footage, copy — all in one place.', dur: '~4‑8 weeks' },
  { step: '04 / Ship',  title: 'Launch & hold',   desc: 'We push the button with you, then stay on for 30 days minimum to fix what real users find.', dur: 'launch + 30d' },
];

export function ProcessGrid() {
  return (
    <section className="py-20 max-[56.25rem]:py-[3.75rem] border-b border-vl-line" id="process">
      <div className="container">
        <div className="grid grid-cols-[12.5rem_1fr] max-[56.25rem]:grid-cols-1 gap-[3.75rem] max-[56.25rem]:gap-4 mb-12 max-[56.25rem]:mb-8 items-start">
          <div className="mono text-xs text-vl-fg-muted">§ 03 / Process</div>
          <div>
            <h2 className="text-[clamp(1.625rem,3vw,2.375rem)] font-medium tracking-[-0.02em] leading-[1.15] mb-3 max-w-[22ch]">
              From first call <span className="dim">to launch</span>, in four moves.
            </h2>
            <p className="text-[0.9375rem] text-vl-fg-dim max-w-[50ch]">
              Tight, opinionated, no‑surprise. We tell you what&apos;s possible in a week, ship the shape of it in two, and polish in four.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 max-[56.25rem]:grid-cols-1 border border-vl-line rounded-md overflow-hidden">
          {STEPS.map(s => (
            <div key={s.step} className="bg-vl-bg-2 p-6 border-r border-vl-line last:border-r-0 max-[56.25rem]:border-r-0 max-[56.25rem]:border-b max-[56.25rem]:border-vl-line max-[56.25rem]:last:border-b-0 transition-colors duration-200 hover:bg-vl-bg-3 flex flex-col gap-3">
              <div className="mono text-[0.6875rem] text-vl-accent uppercase tracking-[0.08em]">{s.step}</div>
              <h4 className="text-lg font-medium tracking-[-0.01em]">{s.title}</h4>
              <p className="text-[0.8125rem] text-vl-fg-dim leading-[1.5]">{s.desc}</p>
              <div className="mt-auto mono text-[0.6875rem] text-vl-fg-muted pt-3 border-t border-vl-line">{s.dur}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
