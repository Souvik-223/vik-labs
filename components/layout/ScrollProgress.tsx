'use client';
import { useScrollProgress } from '@/hooks/use-scroll-progress';
import { useReveal } from '@/hooks/use-reveal';

export function ScrollProgress() {
  const progress = useScrollProgress();
  useReveal();

  return (
    <div
      className="fixed top-7 left-0 h-px bg-vl-accent z-[150] transition-[width] duration-[50ms] ease-linear shadow-[0_0_8px_var(--vl-accent)] pointer-events-none"
      style={{ width: `${progress}%` }}
      aria-hidden
    />
  );
}
