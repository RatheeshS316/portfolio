import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-white pt-20 pb-10" id="blog" aria-label="Footer">
      <div className="wrap flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <ul className="flex flex-wrap md:flex-nowrap items-center gap-x-8 gap-y-4 list-none p-0 m-0 text-white/80">
          <li><a href="/#top" className="hover:text-white transition-colors">Home</a></li>
          <li><a href="/#about" className="hover:text-white transition-colors">About Me</a></li>
          <li><a href="/#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
          <li><a href="/#experience" className="hover:text-white transition-colors">Services</a></li>
          <li><a href="/#blog" className="hover:text-white transition-colors">Blog</a></li>
        </ul>
        <div className="flex flex-col items-start md:items-end gap-1.5">
          <a href="mailto:ratheesh31706@gmail.com" className="text-lg md:text-xl font-medium hover:opacity-80 transition-opacity">ratheesh31706@gmail.com</a>
          <span className="text-[14px] text-ink-faint">+91 8056214847</span>
          <span className="text-[14px] text-ink-faint">Chennai, Tamil Nadu</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
