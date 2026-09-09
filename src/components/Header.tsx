import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useActiveSection } from '../hooks/useActiveSection';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  const sectionIds = useMemo(() => ['top', 'about', 'portfolio', 'experience', 'blog'], []);
  const activeSection = useActiveSection(sectionIds);

  const desktopLinks = [
    { id: 'about', label: 'About Me' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'experience', label: 'Services' },
    { id: 'blog', label: 'Blog' },
  ];

  const getMobileLinkClass = (section: string) =>
    `p-[18px_var(--gutter)] text-[17px] border-b border-line transition-colors ${activeSection === section ? 'bg-ink/5 font-semibold text-ink' : 'text-ink/80'}`;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const ctaElement = document.getElementById('cta');
      if (ctaElement) {
        const rect = ctaElement.getBoundingClientRect();
        // Hide header if the CTA box enters the viewport
        if (rect.top <= window.innerHeight) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-[100] bg-bg transition-transform duration-300 ease-in-out ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <nav className="wrap flex items-center justify-between py-3 3xl:py-5" aria-label="Primary">
        <a href="/#top" className="flex items-center outline-offset-[6px]" aria-label="S. Ratheesh — home">
          <img src="/assets/sr_logo.png" alt="S. Ratheesh Logo" className="h-[60px] 3xl:h-[80px] 4k:h-[100px] w-auto mix-blend-multiply contrast-[1.1] brightness-[1.05]" />
        </a>

        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {desktopLinks.map((link) => (
            <li key={link.id} className="relative">
              <a 
                href={`/#${link.id}`} 
                className={`text-[15px] 3xl:text-[18px] 4k:text-[22px] font-medium relative pb-1 transition-all duration-250 ease-out z-10 block ${activeSection === link.id ? 'text-ink' : 'text-ink/80 hover:text-ink after:content-[\"\"] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-ink hover:after:w-full'}`}
              >
                {link.label}
              </a>
              {activeSection === link.id && (
                <motion.div
                  layoutId="active-underline"
                  className="absolute left-0 bottom-0 h-[1.5px] w-full bg-ink"
                  initial={false}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </li>
          ))}
          <li><a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[15px] 3xl:text-[18px] 4k:text-[22px] text-ink/80 relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-ink hover:after:w-full hover:text-ink transition-all duration-250 ease-out">My Resume</a></li>
        </ul>

        <Link to="/contact" className="hidden md:inline-flex link-arrow 3xl:text-[18px] 4k:text-[22px]">
          <span>Book A Call</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="3xl:w-5 3xl:h-5 4k:w-6 4k:h-6"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </Link>

        <button 
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-12 h-12 bg-transparent border-none p-0 cursor-pointer" 
          aria-label="Toggle menu" 
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className={`block w-[22px] h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}></span>
          <span className={`block w-[22px] h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-[22px] h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`}></span>
        </button>
      </nav>

      <div className={`md:hidden flex flex-col bg-bg border-t border-line overflow-hidden transition-all duration-300 ease-out ${menuOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
        <a href="/#about" onClick={toggleMenu} className={getMobileLinkClass('about')}>About Me</a>
        <a href="/#portfolio" onClick={toggleMenu} className={getMobileLinkClass('portfolio')}>Portfolio</a>
        <a href="/#experience" onClick={toggleMenu} className={getMobileLinkClass('experience')}>Services</a>
        <a href="/#blog" onClick={toggleMenu} className={getMobileLinkClass('blog')}>Blog</a>
        <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="p-[18px_var(--gutter)] text-[17px] text-ink/80 border-b border-line">My Resume</a>
        <Link to="/contact" onClick={toggleMenu} className="p-[18px_var(--gutter)] text-[17px]">Book A Call ↗</Link>
      </div>
    </header>
  );
};

export default Header;



