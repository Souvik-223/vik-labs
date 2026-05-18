'use client';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

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

const rowCls = 'grid grid-cols-[3.125rem_1.4fr_1.8fr_1.4fr_5rem_2.5rem] max-[56.25rem]:grid-cols-1 gap-4 max-[56.25rem]:gap-1 items-center px-4 py-3.5 max-[56.25rem]:py-4 mono text-xs border-b border-vl-line last:border-b-0 transition-colors duration-150 hover:bg-vl-bg-3 cursor-pointer group reveal';

export function WorkFilterTable() {
  const [active, setActive] = useState('all');
  const visible = ALL_WORK.filter(w => active === 'all' || w.tags.includes(active));

  return (
    <>
      <div className="flex gap-1.5 mt-6 flex-wrap reveal" style={{ '--delay': '260ms' } as React.CSSProperties}>
        {FILTERS.map(f => (
          <button
            key={f.tag}
            onClick={() => setActive(f.tag)}
            className={cn(
              'mono text-[0.6875rem] text-vl-fg-dim border border-vl-line-2 rounded px-3 py-1.5 transition-all duration-150 bg-transparent cursor-pointer hover:border-vl-fg hover:text-vl-fg',
              active === f.tag && 'bg-vl-fg text-vl-bg border-vl-fg'
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="border border-vl-line rounded-md overflow-hidden bg-vl-bg-2 mt-6">
        <div className="grid grid-cols-[3.125rem_1.4fr_1.8fr_1.4fr_5rem_2.5rem] max-[56.25rem]:hidden gap-4 items-center px-4 py-3.5 bg-vl-bg-3 border-b border-vl-line mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.08em]">
          <div>#</div><div>Project</div><div>Brief</div><div>Discipline</div><div>Year</div><div />
        </div>
        {visible.map((item, i) => (
          <Link
            className={rowCls}
            key={item.num}
            href="#"
            style={{ '--delay': `${Math.min(i, 7) * 45}ms` } as React.CSSProperties}
          >
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
    </>
  );
}
