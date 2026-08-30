import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    reveals.forEach(reveal => {
      revealObserver.observe(reveal);
    });

    return () => {
      reveals.forEach(reveal => {
        revealObserver.unobserve(reveal);
      });
    };
  }, []);
};
