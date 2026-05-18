export function QuoteBlock() {
  return (
    <section className="container">
      <div className="grid grid-cols-[12.5rem_1fr] max-[56.25rem]:grid-cols-1 gap-[3.75rem] max-[56.25rem]:gap-6 py-[3.75rem] max-[56.25rem]:py-10 border-b border-vl-line">
        <div className="mono text-xs text-vl-fg-muted">§ 04 / Words</div>
        <div>
          <p className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-normal tracking-[-0.015em] leading-[1.35] text-vl-fg max-w-[32ch] mb-6">
            &ldquo;We hired VikLabs to build the app &mdash;{' '}
            <span className="acc">
              they ended up rewriting our positioning, shooting our launch film, and shipping the site too.
            </span>{' '}
            One team, half the time.&rdquo;
          </p>
          <div className="mono text-xs text-vl-fg-dim flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-vl-bg-3 border border-vl-line-2 shrink-0" />
            <div>
              <span className="text-vl-fg">Maya R.</span>{' '}— Co‑founder, Halfdome
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
