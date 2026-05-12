'use client';
import { useCallback, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    const stored = (localStorage.getItem('vl-theme') as Theme) || 'dark';
    setThemeState(stored);
    document.documentElement.setAttribute('data-theme', stored);
  }, []);

  const toggle = useCallback(() => {
    setThemeState(prev => {
      const next: Theme = prev === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('vl-theme', next);
      return next;
    });
  }, []);

  return { theme, toggle };
}
