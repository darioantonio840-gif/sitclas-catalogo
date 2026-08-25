import { useState, useEffect } from 'react';

/**
 * Custom hook to track active section ID during scroll.
 * @param {string[]} sectionIds - Array of element IDs to spy on.
 * @param {object} options - IntersectionObserver options.
 * @returns {string} activeId - Currently visible section ID.
 */
export function useScrollSpy(sectionIds, options = { rootMargin: '-40% 0px -50% 0px' }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sectionIds, options]);

  return activeId;
}
