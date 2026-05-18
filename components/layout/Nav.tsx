'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/',         label: '/ home'     },
  { href: '/services', label: '/ services' },
  { href: '/work',     label: '/ work'     },
  { href: '/about',    label: '/ about'    },
  { href: '/journal',  label: '/ journal'  },
];

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 9 L9 3 M5 3 H9 V7"/>
  </svg>
);

export function Nav() {
  const pathname = usePathname();
  const { theme: currentTheme, toggle } = useTheme();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className="fixed top-7 left-0 right-0 z-[100] bg-vl-bg border-b border-vl-line flex items-center justify-between px-5 max-[56.25rem]:px-3.5 h-14">
      <Link href="/" className="flex items-center gap-3 shrink-0">
        <div className="w-[11.25rem] h-10 bg-[image:var(--logo-url)] bg-contain bg-no-repeat bg-center" />
        <span className="mono text-[0.625rem] text-vl-fg-muted border border-vl-line-2 px-1.5 py-0.5 rounded-[0.1875rem]">v26</span>
      </Link>

      <div className="flex gap-1 items-center max-[56.25rem]:hidden">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'mono text-xs text-vl-fg-dim px-3.5 py-2 rounded-[0.3125rem] transition-all duration-150 hover:text-vl-fg hover:bg-vl-bg-2 relative',
              isActive(href) && "text-vl-fg bg-vl-bg-2 before:content-[''] before:absolute before:left-3.5 before:right-3.5 before:bottom-1 before:h-px before:bg-vl-accent"
            )}
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button
          className="w-8 h-8 border border-vl-line-2 rounded-[0.3125rem] flex items-center justify-center text-vl-fg-dim bg-transparent transition-all duration-150 hover:text-vl-fg hover:border-vl-fg-dim cursor-pointer [&_svg]:w-[0.875rem] [&_svg]:h-[0.875rem]"
          onClick={toggle}
          aria-label="Toggle theme"
        >
          {currentTheme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
        <Link
          href="/contact"
          className="mono text-xs bg-vl-fg text-vl-bg px-3.5 py-[0.5625rem] rounded-[0.3125rem] flex items-center gap-2 transition-all duration-200 hover:bg-vl-accent hover:text-vl-accent-fg whitespace-nowrap"
        >
          Start a project
          <ArrowIcon />
        </Link>
      </div>
    </nav>
  );
}
