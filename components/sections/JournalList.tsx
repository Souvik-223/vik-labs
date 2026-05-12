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
    <div className="journal-list">
      {entries.map(entry => (
        <Link className="journal-row" href="#" key={entry.title}>
          <div className="j-date">{entry.date}</div>
          <div className="j-title">{entry.title}</div>
          <div className="j-tag">{entry.tag}</div>
          <div className="j-read">{entry.read}</div>
          <div className="j-arrow"><ArrowIcon /></div>
        </Link>
      ))}
    </div>
  );
}
