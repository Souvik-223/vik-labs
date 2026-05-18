import Link from 'next/link';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 9 L9 3 M5 3 H9 V7"/>
  </svg>
);

export const WORK_ITEMS = [
  { num: '01', name: 'Northwind OS',  sub: 'Logistics platform',   brief: 'Full rebuild from legacy Rails → Next.js, 3.1× faster page loads', cat: 'Software',            year: '2026', tags: ['software']             },
  { num: '02', name: 'Looplabs',      sub: 'Series A launch film',  brief: '2‑minute brand film, four city shoot, 1.2M views in launch week',  cat: 'Video',               year: '2026', tags: ['video']                },
  { num: '03', name: 'Halfdome',      sub: 'Climbing tech app',     brief: 'Full‑stack MVP & brand identity, 0 → 12k DAU in 4 months',         cat: 'Software · Marketing', year: '2025', tags: ['software', 'marketing'] },
  { num: '04', name: 'Arcade.fm',     sub: 'Independent radio',     brief: 'Visual identity, motion package, weekly social cuts',              cat: 'Video · Marketing',   year: '2025', tags: ['video', 'marketing']    },
  { num: '05', name: 'Ferveo',        sub: 'B2B AI tooling',        brief: 'Positioning rewrite, new site, lifecycle — 3.4× signup lift',      cat: 'Marketing',           year: '2025', tags: ['marketing']            },
  { num: '06', name: 'Polar Studio',  sub: 'Design tool',           brief: 'Internal canvas engine, Figma plugin, animated explainer',         cat: 'Software · Video',    year: '2024', tags: ['software', 'video']    },
];

const rowCls = 'grid grid-cols-[3.125rem_1.4fr_1.8fr_1.4fr_5rem_2.5rem] max-[56.25rem]:grid-cols-1 gap-4 max-[56.25rem]:gap-1 items-center px-4 py-3.5 max-[56.25rem]:py-4 mono text-xs border-b border-vl-line last:border-b-0 transition-colors duration-150 hover:bg-vl-bg-3 cursor-pointer group';

interface WorkTableProps {
  limit?: number;
}

export function WorkTable({ limit }: WorkTableProps) {
  const items = limit ? WORK_ITEMS.slice(0, limit) : WORK_ITEMS;
  return (
    <div className="border border-vl-line rounded-md overflow-hidden bg-vl-bg-2">
      <div className="grid grid-cols-[3.125rem_1.4fr_1.8fr_1.4fr_5rem_2.5rem] max-[56.25rem]:hidden gap-4 items-center px-4 py-3.5 bg-vl-bg-3 border-b border-vl-line mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.08em]">
        <div>#</div><div>Project</div><div>Brief</div><div>Discipline</div><div>Year</div><div />
      </div>
      {items.map(item => (
        <Link className={rowCls} key={item.num} href="/work">
          <div className="text-vl-fg-dim">{item.num}</div>
          <div>
            <div className="font-sans text-base text-vl-fg font-medium tracking-[-0.01em]">{item.name}</div>
            <div className="text-vl-fg-dim">{item.sub}</div>
          </div>
          <div className="text-vl-fg-dim">{item.brief}</div>
          <div className="text-vl-fg-muted uppercase tracking-[0.06em] text-[0.625rem]">{item.cat}</div>
          <div className="text-vl-fg">{item.year}</div>
          <div className="text-vl-fg-muted justify-self-end transition-all duration-200 group-hover:text-vl-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 max-[56.25rem]:hidden">
            <ArrowIcon />
          </div>
        </Link>
      ))}
    </div>
  );
}
