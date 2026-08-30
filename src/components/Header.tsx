import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-[100] bg-bg">
      <nav className="wrap flex items-center justify-between py-7" aria-label="Primary">
        <a href="/#top" className="flex items-center outline-offset-[6px]" aria-label="S. Ratheesh — home">
          <img src="/assets/sr_logo.png" alt="S. Ratheesh Logo" className="h-[85px] w-auto mix-blend-multiply contrast-[1.1] brightness-[1.05]" />
        </a>

        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          <li><a href="/#about" className="text-[15px] text-ink relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-ink hover:after:w-full transition-all duration-250 ease-out">About Me</a></li>
          <li><a href="/#portfolio" className="text-[15px] text-ink relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-ink hover:after:w-full transition-all duration-250 ease-out">Portfolio</a></li>
          <li><a href="/#experience" className="text-[15px] text-ink relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-ink hover:after:w-full transition-all duration-250 ease-out">Services</a></li>
          <li><a href="/#blog" className="text-[15px] text-ink relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-ink hover:after:w-full transition-all duration-250 ease-out">Blog</a></li>
          <li><a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[15px] text-ink relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-ink hover:after:w-full transition-all duration-250 ease-out">My Resume</a></li>
        </ul>

        <Link to="/contact" className="hidden md:inline-flex link-arrow">
          <span>Book A Call</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </Link>

        <button 
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 bg-transparent border-none p-0 cursor-pointer" 
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
        <a href="/#about" onClick={toggleMenu} className="p-[18px_var(--gutter)] text-[17px] border-b border-line">About Me</a>
        <a href="/#portfolio" onClick={toggleMenu} className="p-[18px_var(--gutter)] text-[17px] border-b border-line">Portfolio</a>
        <a href="/#experience" onClick={toggleMenu} className="p-[18px_var(--gutter)] text-[17px] border-b border-line">Services</a>
        <a href="/#blog" onClick={toggleMenu} className="p-[18px_var(--gutter)] text-[17px] border-b border-line">Blog</a>
        <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="p-[18px_var(--gutter)] text-[17px] border-b border-line">My Resume</a>
        <Link to="/contact" onClick={toggleMenu} className="p-[18px_var(--gutter)] text-[17px]">Book A Call ↗</Link>
      </div>
    </header>
  );
};

export default Header;
