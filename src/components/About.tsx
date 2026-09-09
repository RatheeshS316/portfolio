import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const About: React.FC = () => {
  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="pt-[120px] pb-[80px] bg-bg-card rounded-t-lg md:rounded-t-[40px] relative mt-[-20px] z-10" id="about" aria-label="About me">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_minmax(280px,320px)_1fr] gap-[60px] lg:gap-[40px] items-start">
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}
          className="flex flex-col relative"
        >
          <h2 className="font-display text-[clamp(40px,5vw,54px)] font-normal tracking-[-0.03em] m-0 mb-[30px] leading-[1.1]">About Me</h2>
          <p className="text-[17px] text-ink-soft leading-[1.7] max-w-[420px] m-0 mb-[40px]">
            Final-year Computer Science Engineering student and Full Stack Developer skilled in Java, Python, React, Django, Django REST Framework, MySQL, and REST APIs. A continuous learner focused on building practical, scalable software solutions. Open to work.
          </p>
          <svg className="hidden md:block absolute right-[-20px] bottom-[-60px] w-[140px] text-line/50" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 4 C 30 4, 40 70, 120 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M100 58 L122 71 L107 88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}
          className="bg-[#f7f7f5] rounded-md p-[30px] flex flex-col items-center text-center"
        >
          <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center mb-5 text-ink-soft" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><line x1="3" y1="12" x2="21" y2="12"/></svg>
          </div>
          <p className="font-display text-[54px] font-light tracking-[-0.03em] leading-none text-ink m-0 mb-3">120%</p>
          <p className="text-[14px] text-ink-soft leading-[1.4] m-0 mb-[30px]">Average increase in client engagement in the first 6 months</p>
          <div className="w-full aspect-square rounded-sm overflow-hidden mix-blend-multiply contrast-[1.1]">
            <img src="/assets/about_card_photo.jpg" alt="Portrait of S. Ratheesh" className="w-full h-full object-cover grayscale" />
          </div>
        </motion.div>

        <div className="flex flex-col gap-[60px] md:pl-[20px]">
          <Link to="/contact" className="hidden md:block w-[140px] h-[140px] rounded-full overflow-hidden self-end relative group" aria-label="Contact me">
            <img src="/assets/about_portrait_small.jpg" alt="Headshot linking to contact" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
          </Link>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}
            className="flex flex-col gap-[30px]"
          >
            <div className="flex gap-[15px] items-start">
              <span className="text-ink mt-[3px]" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]"><path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z"/></svg>
              </span>
              <p className="m-0 text-[15px] text-ink-soft leading-[1.6]">
                Strong foundation in Data Structures and Algorithms using Java, with experience developing responsive web applications and integrating frontend with backend services.
              </p>
            </div>
            <div className="flex gap-[15px] items-start">
              <span className="text-ink mt-[3px]" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]"><path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z"/></svg>
              </span>
              <p className="m-0 text-[15px] text-ink-soft leading-[1.6]">
                Always eager to explore new technologies, take on challenging projects, and continuously improve my problem-solving skills to build efficient, real-world solutions.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
