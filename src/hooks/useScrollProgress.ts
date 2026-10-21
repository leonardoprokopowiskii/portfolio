import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 16);
      setProgress(h > 0 ? Math.min(y / h, 1) : 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { progress, scrolled };
}
