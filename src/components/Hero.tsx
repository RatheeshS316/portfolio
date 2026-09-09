import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-[calc(100vh-88px)] pb-[60px]" id="hero" aria-label="Introduction">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[60px_1fr_minmax(auto,620px)] items-stretch min-h-[calc(100vh-160px)]">
        {/* Rail - Hidden on mobile, visible on lg */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
          className="hidden lg:flex flex-col items-center justify-end pb-5"
        >
          <span className="rotate-[-180deg] [writing-mode:vertical-rl] text-[14px] font-light tracking-[0.1em] uppercase mb-[30px] whitespace-nowrap">
            FullStack Developer
          </span>
          <span className="w-[1px] h-[100px] bg-line" aria-hidden="true"></span>
        </motion.div>

        {/* Main */}
        <motion.div 
          className="flex flex-col justify-center lg:pl-[60px] lg:pr-[40px] pt-10 lg:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex gap-[40px] mb-[40px] lg:mb-[60px]">
            <div>
              <p className="font-display text-[42px] 3xl:text-[60px] 4k:text-[80px] font-thin leading-none tracking-[-0.03em] m-0 mb-2">30+</p>
              <p className="text-[14px] 3xl:text-[18px] 4k:text-[22px] font-light text-ink-soft m-0 max-w-[80px] 3xl:max-w-[120px] 4k:max-w-[160px] leading-[1.4]">Projects completed</p>
            </div>
            <div>
              <p className="font-display text-[42px] 3xl:text-[60px] 4k:text-[80px] font-thin leading-none tracking-[-0.03em] m-0 mb-2">100+</p>
              <p className="text-[14px] 3xl:text-[18px] 4k:text-[22px] font-light text-ink-soft m-0 max-w-[80px] 3xl:max-w-[120px] 4k:max-w-[160px] leading-[1.4]">Coding Count</p>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-display text-[clamp(80px,10vw,160px)] 3xl:text-[200px] 4k:text-[280px] font-light leading-[0.85] tracking-[-0.04em] m-0 mb-[20px] lg:mb-[30px]">
            Hello
          </motion.h1>
          <motion.p variants={itemVariants} className="text-[clamp(14px,2vw,22px)] 3xl:text-[28px] 4k:text-[36px] font-extralight text-ink-soft leading-[1.3] m-0 flex gap-[15px] whitespace-nowrap">
            <span className="font-extralight">—</span> It's S.Ratheesh a FullStack Developer
          </motion.p>

          <motion.img 
            variants={itemVariants}
            className="block lg:hidden mx-auto rounded-[20px] mt-[40px] mb-[40px] w-full max-w-[340px] object-contain aspect-[3/3.6]" 
            src="/assets/portrait_hero_transparent.png" 
            alt="Portrait of S. Ratheesh, FullStack Developer, wearing a dark blazer over a white shirt" 
          />

          <motion.button 
            variants={itemVariants}
            className="hidden lg:inline-flex mt-[80px] 3xl:mt-[120px] bg-transparent border-none p-0 items-center gap-[10px] text-[14px] 3xl:text-[18px] 4k:text-[22px] font-light uppercase tracking-[0.05em] text-ink cursor-pointer hover:opacity-70 transition-opacity" 
            onClick={scrollToAbout}
          >
            Scroll down
            <svg className="w-[18px] h-[18px] animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <polyline points="19 12 12 19 5 12"/>
            </svg>
          </motion.button>
        </motion.div>

        {/* Portrait Wrap - visible on lg */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="hidden lg:block relative rounded-lg overflow-hidden mt-5"
        >
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            className="w-full h-full object-cover" 
            src="/assets/portrait_hero_transparent.png" 
            alt="Portrait of S. Ratheesh" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
