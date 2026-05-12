'use client';
import { useEffect, useState } from 'react';

export function useISTClock() {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    function tick() {
      const now = new Date();
      const ist = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 5.5 * 3600000);
      const pad = (n: number) => String(n).padStart(2, '0');
      setTime(`${pad(ist.getHours())}:${pad(ist.getMinutes())}:${pad(ist.getSeconds())}`);
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
