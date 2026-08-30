import React from 'react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[calc(100vh-88px)] pb-[60px]" id="hero" aria-label="Introduction">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[60px_1fr_minmax(auto,620px)] items-stretch min-h-[calc(100vh-160px)]">
        {/* Rail - Hidden on mobile, visible on lg */}
        <div className="hidden lg:flex flex-col items-center justify-end pb-5">
          <span className="rotate-[-180deg] [writing-mode:vertical-rl] text-[14px] font-medium tracking-[0.1em] uppercase mb-[30px] whitespace-nowrap">
            FullStack Developer
          </span>
          <span className="w-[1px] h-[100px] bg-line" aria-hidden="true"></span>
        </div>

        {/* Main */}
        <div className="flex flex-col justify-center lg:pl-[60px] lg:pr-[40px] pt-10 lg:pt-0">
          <div className="flex gap-[40px] mb-[40px] lg:mb-[60px]">
            <div>
              <p className="font-display text-[42px] font-light leading-none tracking-[-0.03em] m-0 mb-2">30+</p>
              <p className="text-[14px] text-ink-soft m-0 max-w-[80px] leading-[1.4]">Projects completed</p>
            </div>
            <div>
              <p className="font-display text-[42px] font-light leading-none tracking-[-0.03em] m-0 mb-2">100+</p>
              <p className="text-[14px] text-ink-soft m-0 max-w-[80px] leading-[1.4]">Coding Count</p>
            </div>
          </div>

          <h1 className="font-display text-[clamp(80px,10vw,160px)] font-normal leading-[0.85] tracking-[-0.04em] m-0 mb-[20px] lg:mb-[30px]">
            Hello
          </h1>
          <p className="text-[clamp(20px,3vw,32px)] font-light text-ink-soft leading-[1.3] max-w-[480px] m-0 flex gap-[15px]">
            <span className="font-light">—</span> It's S.Ratheesh a FullStack Developer
          </p>

          <img 
            className="block lg:hidden rounded-[20px] mt-[40px] mb-[40px] w-full max-w-[340px] object-contain aspect-[3/3.6]" 
            src="/assets/portrait_hero_transparent.png" 
            alt="Portrait of S. Ratheesh, FullStack Developer, wearing a dark blazer over a white shirt" 
          />

          <button 
            className="hidden lg:inline-flex mt-[80px] bg-transparent border-none p-0 items-center gap-[10px] text-[14px] font-medium uppercase tracking-[0.05em] text-ink cursor-pointer hover:opacity-70 transition-opacity" 
            onClick={scrollToAbout}
          >
            Scroll down
            <svg className="w-[18px] h-[18px] animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <polyline points="19 12 12 19 5 12"/>
            </svg>
          </button>
        </div>

        {/* Portrait Wrap - visible on lg */}
        <div className="hidden lg:block relative rounded-lg overflow-hidden mt-5">
          <img className="w-full h-full object-cover" src="/assets/portrait_hero_transparent.png" alt="Portrait of S. Ratheesh" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
