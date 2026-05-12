interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, lede, children }: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className="container">
        <div className="page-eyebrow">
          <span className="dot" />
          {eyebrow}
        </div>
        <h1 className="page-title">{title}</h1>
        <p className="page-lede">{lede}</p>
        {children}
      </div>
    </header>
  );
}
