const BELIEFS = [
  {
    num: '01',
    title: 'Show, don\'t slide.',
    body: 'Working software, real footage, live pages — never decks pretending to be product. Fidelity from day one keeps everyone honest.',
  },
  {
    num: '02',
    title: 'One team, one timeline.',
    body: 'Engineering, video, marketing — same Slack, same standup, same Friday demo. No vendor‑to‑vendor translation tax.',
  },
  {
    num: '03',
    title: 'Taste is a discipline.',
    body: 'We re‑draw, re‑cut, re‑write. Boring drafts ship to internal review and never to you. Polish is the job, not the bonus.',
  },
  {
    num: '04',
    title: 'Leave a runway.',
    body: 'Every project ends with docs, tests, source files, and a 30‑day handover so your team can pick it up cleanly.',
  },
];

export function Beliefs() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-num mono">§ 01 / Beliefs</div>
          <div>
            <h2 className="section-title">
              Four things <span className="dim">we hold to</span>.
            </h2>
            <p className="section-sub">Not a manifesto. Just the rules that come up in every project review.</p>
          </div>
        </div>
        <div className="beliefs">
          {BELIEFS.map(b => (
            <div className="belief" key={b.num}>
              <div className="b-num">{b.num}</div>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
