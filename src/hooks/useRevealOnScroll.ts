import { useEffect } from 'react';

export function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('.rv');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver(
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
        threshold: 0.03,
        rootMargin: '30px 0px -30px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
