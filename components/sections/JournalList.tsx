import Link from 'next/link';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 9 L9 3 M5 3 H9 V7"/>
  </svg>
);

export const JOURNAL_ENTRIES = [
  { date: '04 / MAY · 26', title: 'The five‑hour edit: why fast cuts beat perfect ones',       tag: 'Video',     read: '7 min'  },
  { date: '22 / APR · 26', title: 'A small case for owning your component library',             tag: 'Software',  read: '5 min'  },
  { date: '09 / APR · 26', title: 'Positioning is a product decision, not a copy one',          tag: 'Marketing', read: '9 min'  },
  { date: '28 / MAR · 26', title: 'How we shoot a launch film in three days',                   tag: 'Video',     read: '11 min' },
  { date: '14 / MAR · 26', title: 'The Friday demo — our only meeting that matters',            tag: 'Studio',    read: '4 min'  },
  { date: '02 / MAR · 26', title: 'Designing for the unedited screenshot',                      tag: 'Software',  read: '6 min'  },
  { date: '19 / FEB · 26', title: 'Why we charge per outcome, not per hour',                    tag: 'Studio',    read: '8 min'  },
  { date: '06 / FEB · 26', title: 'A grammar of motion: when to ease, when to cut',             tag: 'Video',     read: '12 min' },
  { date: '23 / JAN · 26', title: 'Most landing pages are too long. Some are too short.',       tag: 'Marketing', read: '6 min'  },
];

interface JournalListProps {
  limit?: number;
}

export function JournalList({ limit }: JournalListProps) {
  const entries = limit ? JOURNAL_ENTRIES.slice(0, limit) : JOURNAL_ENTRIES;
  return (
    <div className="border border-vl-line rounded-md overflow-hidden bg-vl-bg-2">
      {entries.map((entry, i) => (
        <Link
          key={entry.title}
          href="#"
          className="grid grid-cols-[7.5rem_1fr_8.125rem_4.375rem_2.5rem] max-[56.25rem]:grid-cols-1 items-center gap-4 max-[56.25rem]:gap-1 p-4 border-b border-vl-line last:border-b-0 transition-colors duration-150 hover:bg-vl-bg-3 cursor-pointer group reveal"
          style={{ '--delay': `${Math.min(i, 6) * 50}ms` } as React.CSSProperties}
        >
          <div className="mono text-[0.6875rem] text-vl-fg-muted max-[56.25rem]:hidden">{entry.date}</div>
          <div className="text-base font-medium tracking-[-0.01em] text-vl-fg group-hover:text-vl-accent transition-colors duration-150">{entry.title}</div>
          <div className="mono text-[0.625rem] text-vl-fg-dim border border-vl-line-2 px-2 py-[0.1875rem] rounded-[0.1875rem] uppercase tracking-[0.06em] justify-self-start">{entry.tag}</div>
          <div className="mono text-[0.625rem] text-vl-fg-muted uppercase tracking-[0.06em] max-[56.25rem]:hidden">{entry.read}</div>
          <div className="text-vl-fg-muted justify-self-end group-hover:text-vl-accent transition-colors duration-150 max-[56.25rem]:hidden"><ArrowIcon /></div>
        </Link>
      ))}
    </div>
  );
}
