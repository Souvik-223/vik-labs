'use client';
import { useEffect, useRef, useState } from 'react';

interface Stat {
  num: number;
  dec: number;
  unit: string;
  trail: string;
  label: string;
}

const STATS: Stat[] = [
  { num: 42,  dec: 0, unit: '',  trail: '+', label: 'projects shipped' },
  { num: 11,  dec: 0, unit: '',  trail: '',  label: 'countries'         },
  { num: 6.4, dec: 1, unit: 'M', trail: '',  label: 'video impressions' },
  { num: 98,  dec: 0, unit: '',  trail: '%', label: 'on‑time delivery'  },
];

function StatCounter({ num, dec, unit, trail, label, delay }: Stat & { delay: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const startTime = performance.now();
    let raf: number;
    const step = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(eased * num);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, num]);

  const display = dec > 0 ? count.toFixed(dec) : Math.round(count).toString();

  return (
    <div
      ref={ref}
      className="p-7 border-r border-vl-line last:border-r-0 max-[56.25rem]:border-r-0 max-[56.25rem]:border-b max-[56.25rem]:border-vl-line reveal"
      style={{ '--delay': `${delay}ms` } as React.CSSProperties}
    >
      <div className="text-[2.25rem] font-medium tracking-[-0.02em] text-vl-fg mb-1">
        {display}{unit}<span className="acc">{trail}</span>
      </div>
      <div className="mono text-[0.6875rem] text-vl-fg-muted uppercase tracking-[0.08em]">{label}</div>
    </div>
  );
}

export function StatsRow() {
  return (
    <section className="grid grid-cols-4 max-[56.25rem]:grid-cols-2 border-t border-b border-vl-line bg-vl-bg-2">
      {STATS.map((s, i) => <StatCounter key={s.label} {...s} delay={i * 100} />)}
    </section>
  );
}
