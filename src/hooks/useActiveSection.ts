import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // Find all section elements
      const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
      
      // Get current scroll position, add an offset (e.g., a third of the viewport height)
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = sectionIds[0]; // Default to first

      for (const element of elements) {
        if (element.offsetTop <= scrollPosition) {
          currentSection = element.id;
        }
      }

      // Check if we are at the very bottom of the page
      const isAtBottom = window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 20;
      if (isAtBottom && elements.length > 0) {
        currentSection = elements[elements.length - 1].id;
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]); // eslint-disable-line react-hooks/exhaustive-deps

  return activeSection;
};
