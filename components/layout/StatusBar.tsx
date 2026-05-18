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

const cell = 'px-3.5 h-full flex items-center gap-2 border-r border-vl-line whitespace-nowrap';

export function StatusBar() {
  const time = useISTClock();
  const pathname = usePathname();
  const label = PAGE_LABELS[pathname] ?? 'viklabs.io';

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] bg-vl-bg border-b border-vl-line font-mono text-[0.6875rem] text-vl-fg-dim flex items-center h-7">
      <div className={cell}>
        <span className="acc">VL</span> · {label}
      </div>
      <div className={`${cell} max-[56.25rem]:hidden`}>
        <span className="w-1.5 h-1.5 rounded-full bg-vl-green shadow-[0_0_0.375rem_var(--vl-green)] shrink-0" />
        Booking Q3 · 2 slots open
      </div>
      <div className={`${cell} max-[56.25rem]:hidden`}>
        Kolkata · <span className="acc">{time}</span> IST
      </div>
      <div className="flex-1" />
      <div className="px-3.5 h-full flex items-center gap-2 border-l border-vl-line whitespace-nowrap max-[56.25rem]:hidden">
        v26.05 / build a1f9
      </div>
      <div className="px-3.5 h-full flex items-center gap-2 border-l border-vl-line whitespace-nowrap">
        <Link href="mailto:hello@viklabs.io">hello@viklabs.io</Link>
      </div>
    </div>
  );
}
