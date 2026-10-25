import { useEffect } from 'react';

export function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.rv');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('in'));
      return;
    }

    // Default observer for general sections (elements appear & disappear smoothly while in sight)
    const standardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          } else {
            entry.target.classList.remove('in');
          }
        });
      },
      {
        threshold: 0.04,
        rootMargin: '-10% 0px -12% 0px',
      }
    );

    // Dedicated observer for footer / bottom-anchored elements
    // Uses a safe bottom margin (-20px) so it reveals smoothly in view and stays fully visible at scroll bottom
    const bottomObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          } else {
            entry.target.classList.remove('in');
          }
        });
      },
      {
        threshold: 0.04,
        rootMargin: '-10% 0px -20px 0px',
      }
    );

    elements.forEach((el) => {
      if (el.closest('footer')) {
        bottomObserver.observe(el);
      } else {
        standardObserver.observe(el);
      }
    });

    return () => {
      standardObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);
}
