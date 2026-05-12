import Link from 'next/link';

const ArrowIcon = () => (
  <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 9 L9 3 M5 3 H9 V7"/>
  </svg>
);

interface CtaBlockProps {
  eyebrow?: string;
  title: React.ReactNode;
  sub: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export function CtaBlock({
  eyebrow,
  title,
  sub,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBlockProps) {
  return (
    <section className="cta-block">
      <div className="container">
        {eyebrow && (
          <div className="section-label mono" style={{ justifyContent: 'center' }}>
            {eyebrow}
          </div>
        )}
        <h2>{title}</h2>
        <p className="sub">{sub}</p>
        <div className="actions">
          <Link href={primaryHref} className="btn primary">
            {primaryLabel}
            <ArrowIcon />
          </Link>
          <Link href={secondaryHref} className="btn">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
