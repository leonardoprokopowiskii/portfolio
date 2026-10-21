import { PointerEvent, useCallback } from 'react';

export function useCardSpotlight<T extends HTMLElement = HTMLElement>() {
  const onPointerMove = useCallback((ev: PointerEvent<T>) => {
    const el = ev.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${ev.clientX - rect.left}px`);
    el.style.setProperty('--my', `${ev.clientY - rect.top}px`);
  }, []);

  return { onPointerMove };
}
