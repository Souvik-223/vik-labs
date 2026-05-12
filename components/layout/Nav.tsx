'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/hooks/use-theme';

const NAV_LINKS = [
  { href: '/',        label: '/ home'     },
  { href: '/services',label: '/ services' },
  { href: '/work',    label: '/ work'     },
  { href: '/about',   label: '/ about'    },
  { href: '/journal', label: '/ journal'  },
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
  <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 9 L9 3 M5 3 H9 V7"/>
  </svg>
);

export function Nav() {
  const pathname = usePathname();
  const { theme: currentTheme, toggle } = useTheme();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        <div className="mark" />
        <span className="v mono">v26</span>
      </Link>

      <div className="nav-links">
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className={isActive(href) ? 'active' : ''}>
            {label}
          </Link>
        ))}
      </div>

      <div className="nav-right">
        <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
          {currentTheme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
        <Link href="/contact" className="nav-cta">
          Start a project
          <ArrowIcon />
        </Link>
      </div>
    </nav>
  );
}
