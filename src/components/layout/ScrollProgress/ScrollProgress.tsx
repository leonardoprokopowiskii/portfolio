import { useEffect, useRef } from 'react';
import styles from './ScrollProgress.module.css';

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const progress = h > 0 ? Math.min(y / h, 1) : 0;
        bar.style.transform = `scaleX(${progress})`;
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={barRef} className={styles.prog} aria-hidden="true" />;
}
