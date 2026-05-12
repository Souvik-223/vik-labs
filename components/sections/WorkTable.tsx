import Link from 'next/link';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 9 L9 3 M5 3 H9 V7"/>
  </svg>
);

export const WORK_ITEMS = [
  { num: '01', name: 'Northwind OS',   sub: 'Logistics platform',    brief: 'Full rebuild from legacy Rails → Next.js, 3.1× faster page loads', cat: 'Software',           year: '2026', tags: ['software']            },
  { num: '02', name: 'Looplabs',       sub: 'Series A launch film',   brief: '2‑minute brand film, four city shoot, 1.2M views in launch week',  cat: 'Video',              year: '2026', tags: ['video']               },
  { num: '03', name: 'Halfdome',       sub: 'Climbing tech app',      brief: 'Full‑stack MVP & brand identity, 0 → 12k DAU in 4 months',         cat: 'Software · Marketing',year: '2025', tags: ['software','marketing'] },
  { num: '04', name: 'Arcade.fm',      sub: 'Independent radio',      brief: 'Visual identity, motion package, weekly social cuts',              cat: 'Video · Marketing',  year: '2025', tags: ['video','marketing']    },
  { num: '05', name: 'Ferveo',         sub: 'B2B AI tooling',         brief: 'Positioning rewrite, new site, lifecycle — 3.4× signup lift',      cat: 'Marketing',          year: '2025', tags: ['marketing']           },
  { num: '06', name: 'Polar Studio',   sub: 'Design tool',            brief: 'Internal canvas engine, Figma plugin, animated explainer',         cat: 'Software · Video',   year: '2024', tags: ['software','video']     },
];

interface WorkTableProps {
  limit?: number;
}

export function WorkTable({ limit }: WorkTableProps) {
  const items = limit ? WORK_ITEMS.slice(0, limit) : WORK_ITEMS;
  return (
    <div className="work-table">
      <div className="work-table-head">
        <div>#</div>
        <div>Project</div>
        <div>Brief</div>
        <div>Discipline</div>
        <div>Year</div>
        <div />
      </div>
      {items.map(item => (
        <Link className="work-row" key={item.num} href="/work">
          <div className="mono text-dim">{item.num}</div>
          <div>
            <div className="w-name">{item.name}</div>
            <div className="w-sub">{item.sub}</div>
          </div>
          <div className="w-sub">{item.brief}</div>
          <div className="w-cat">{item.cat}</div>
          <div className="w-year">{item.year}</div>
          <div className="w-arrow"><ArrowIcon /></div>
        </Link>
      ))}
    </div>
  );
}
