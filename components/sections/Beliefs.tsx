const BELIEFS = [
  { num: '01', title: 'Show, don\'t slide.',      body: 'Working software, real footage, live pages — never decks pretending to be product. Fidelity from day one keeps everyone honest.' },
  { num: '02', title: 'One team, one timeline.',  body: 'Engineering, video, marketing — same Slack, same standup, same Friday demo. No vendor‑to‑vendor translation tax.' },
  { num: '03', title: 'Taste is a discipline.',   body: 'We re‑draw, re‑cut, re‑write. Boring drafts ship to internal review and never to you. Polish is the job, not the bonus.' },
  { num: '04', title: 'Leave a runway.',           body: 'Every project ends with docs, tests, source files, and a 30‑day handover so your team can pick it up cleanly.' },
];

export function Beliefs() {
  return (
    <section className="py-20 max-[56.25rem]:py-[3.75rem] border-b border-vl-line">
      <div className="container">
        <div className="grid grid-cols-[12.5rem_1fr] max-[56.25rem]:grid-cols-1 gap-[3.75rem] max-[56.25rem]:gap-4 mb-12 max-[56.25rem]:mb-8 items-start">
          <div className="mono text-xs text-vl-fg-muted">§ 01 / Beliefs</div>
          <div>
            <h2 className="text-[clamp(1.625rem,3vw,2.375rem)] font-medium tracking-[-0.02em] leading-[1.15] mb-3 max-w-[22ch]">
              Four things <span className="dim">we hold to</span>.
            </h2>
            <p className="text-[0.9375rem] text-vl-fg-dim max-w-[50ch]">Not a manifesto. Just the rules that come up in every project review.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 max-[56.25rem]:grid-cols-1 gap-px bg-vl-line border border-vl-line rounded-md overflow-hidden">
          {BELIEFS.map(b => (
            <div key={b.num} className="bg-vl-bg-2 p-6 flex flex-col gap-2 transition-colors duration-200 hover:bg-vl-bg-3">
              <div className="mono text-[0.6875rem] text-vl-accent tracking-[0.08em]">{b.num}</div>
              <h3 className="text-lg font-medium tracking-[-0.01em]">{b.title}</h3>
              <p className="text-vl-fg-dim text-[0.8125rem] leading-[1.55]">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
