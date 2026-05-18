import Link from 'next/link';

const FOOTER_COLS = [
  {
    title: 'Studio',
    links: [
      { label: 'Services',  href: '/services' },
      { label: 'Work',      href: '/work'     },
      { label: 'About',     href: '/about'    },
      { label: 'Journal',   href: '/journal'  },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'hello@viklabs.io', href: 'mailto:hello@viklabs.io' },
      { label: 'X / @viklabs',     href: '#' },
      { label: 'LinkedIn',         href: '#' },
      { label: 'Read.cv',          href: '#' },
    ],
  },
  {
    title: 'Office',
    links: [
      { label: 'Bengaluru, IN', href: '#'        },
      { label: 'UTC+05:30',     href: '#'        },
      { label: 'Book an intro', href: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="pt-20 pb-6 bg-vl-bg">
      <div className="container">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] max-[56.25rem]:grid-cols-2 gap-10 pb-[3.75rem] border-b border-vl-line">
          <div>
            <div className="w-[12.5rem] h-11 bg-[image:var(--logo-url)] bg-contain bg-no-repeat bg-left-center mb-5" />
            <p className="text-vl-fg-dim text-[0.8125rem] max-w-[32ch] leading-[1.6]">
              An independent product studio building software, video, and marketing for founders. Based in Bengaluru, working with teams from Berlin to Brooklyn.
            </p>
          </div>

          {FOOTER_COLS.map(col => (
            <div key={col.title}>
              <h4 className="mono text-[0.6875rem] text-vl-fg-muted uppercase tracking-[0.08em] mb-4 font-medium">{col.title}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[0.8125rem] text-vl-fg-dim hover:text-vl-fg transition-colors duration-150">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="font-medium tracking-[-0.05em] leading-[0.9] mt-[3.75rem] mb-10 select-none text-transparent text-center"
          style={{
            fontSize: 'clamp(4.375rem, 16vw, 13.75rem)',
            WebkitTextStroke: '1px var(--vl-fg-dim)',
          }}
        >
          viklabs
        </div>

        <div className="pt-6 flex justify-between items-center flex-wrap gap-4 max-[56.25rem]:flex-col max-[56.25rem]:items-start mono text-[0.6875rem] text-vl-fg-muted">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-vl-green shadow-[0_0_0.3125rem_var(--vl-green)] shrink-0" />
            All systems normal · accepting Q3 work
          </div>
          <div>© 2026 VikLabs Studio · v26.05</div>
        </div>
      </div>
    </footer>
  );
}
