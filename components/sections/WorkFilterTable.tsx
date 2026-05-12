'use client';
import Link from 'next/link';
import { useState } from 'react';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 9 L9 3 M5 3 H9 V7"/>
  </svg>
);

const ALL_WORK = [
  { num: '01', name: 'Northwind OS',     sub: 'Logistics platform',       brief: 'Full rebuild from legacy Rails → Next.js, 3.1× faster page loads, +28% NPS',     cat: 'Software',            year: '2026', tags: ['software']             },
  { num: '02', name: 'Looplabs',         sub: 'Series A launch film',      brief: '2‑minute brand film, four city shoot, 1.2M views in launch week',               cat: 'Video',               year: '2026', tags: ['video']                },
  { num: '03', name: 'Halfdome',         sub: 'Climbing tech app',         brief: 'Full‑stack MVP & brand identity, 0 → 12k DAU in 4 months',                      cat: 'Software · Marketing', year: '2025', tags: ['software', 'marketing'] },
  { num: '04', name: 'Arcade.fm',        sub: 'Independent radio',         brief: 'Visual identity, motion package, weekly social cuts (1.8M followers)',           cat: 'Video · Marketing',   year: '2025', tags: ['video', 'marketing']   },
  { num: '05', name: 'Ferveo',           sub: 'B2B AI tooling',            brief: 'Positioning rewrite, new site, lifecycle email — 3.4× signup lift',              cat: 'Marketing',           year: '2025', tags: ['marketing']            },
  { num: '06', name: 'Polar Studio',     sub: 'Design tool',               brief: 'Internal canvas engine, Figma plugin, animated explainer',                      cat: 'Software · Video',    year: '2024', tags: ['software', 'video']    },
  { num: '07', name: 'Cidermill',        sub: 'DTC commerce',              brief: 'Headless Shopify rebuild, 2.3× conversion on PDP, Lighthouse 98',               cat: 'Software',            year: '2024', tags: ['software']             },
  { num: '08', name: 'Tideway Capital',  sub: 'Investor narrative film',   brief: 'Long‑form interview series, 6 partners, used in 3 LP closes',                   cat: 'Video',               year: '2024', tags: ['video']                },
  { num: '09', name: 'Pinecrest Health', sub: 'HIPAA telehealth',          brief: 'Patient portal + provider tooling, launch site, 14k visits / mo organic',       cat: 'Software · Marketing', year: '2024', tags: ['software', 'marketing'] },
];

const FILTERS = [
  { tag: 'all',       label: 'All'       },
  { tag: 'software',  label: 'Software'  },
  { tag: 'video',     label: 'Video'     },
  { tag: 'marketing', label: 'Marketing' },
];

export function WorkFilterTable() {
  const [active, setActive] = useState('all');

  const visible = ALL_WORK.filter(
    w => active === 'all' || w.tags.includes(active)
  );

  return (
    <>
      <div className="filter-row">
        {FILTERS.map(f => (
          <button
            key={f.tag}
            className={`filter${active === f.tag ? ' active' : ''}`}
            onClick={() => setActive(f.tag)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="work-table" style={{ marginTop: '24px' }}>
        <div className="work-table-head">
          <div>#</div>
          <div>Project</div>
          <div>Brief</div>
          <div>Discipline</div>
          <div>Year</div>
          <div />
        </div>
        {visible.map(item => (
          <Link className="work-row" key={item.num} href="#">
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
    </>
  );
}
