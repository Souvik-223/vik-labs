'use client';
import Link from 'next/link';
import { useISTClock } from '@/hooks/use-ist-clock';
import { usePathname } from 'next/navigation';

const PAGE_LABELS: Record<string, string> = {
  '/':         'viklabs.io',
  '/services': 'viklabs.io / services',
  '/work':     'viklabs.io / work',
  '/about':    'viklabs.io / about',
  '/journal':  'viklabs.io / journal',
  '/contact':  'viklabs.io / contact',
};

export function StatusBar() {
  const time = useISTClock();
  const pathname = usePathname();
  const label = PAGE_LABELS[pathname] ?? 'viklabs.io';

  return (
    <div className="statusbar">
      <div className="statusbar-cell">
        <span className="acc">VL</span> · {label}
      </div>
      <div className="statusbar-cell hide-sm">
        <span className="live-dot" /> Booking Q3 · 2 slots open
      </div>
      <div className="statusbar-cell hide-sm">
        Bengaluru · <span className="acc">{time}</span> IST
      </div>
      <div className="statusbar-cell spacer" />
      <div className="statusbar-cell right hide-sm">v26.05 / build a1f9</div>
      <div className="statusbar-cell right">
        <Link href="mailto:hello@viklabs.io" style={{ color: 'inherit' }}>
          hello@viklabs.io
        </Link>
      </div>
    </div>
  );
}
