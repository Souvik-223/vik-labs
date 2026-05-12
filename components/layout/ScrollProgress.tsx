'use client';
import { useScrollProgress } from '@/hooks/use-scroll-progress';
import { useReveal } from '@/hooks/use-reveal';

export function ScrollProgress() {
  const progress = useScrollProgress();
  useReveal();

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
      aria-hidden
    />
  );
}
