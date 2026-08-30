import React from 'react';

const TechStack: React.FC = () => {
  return (
    <section className="py-[120px] bg-bg" id="tech-stack" aria-label="Tech Stack">
      <div className="wrap">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 reveal">
          <div>
            <span className="eyebrow-pill mb-6"><span className="dot"></span> Skills</span>
            <h2 className="font-display text-[clamp(40px,5vw,54px)] font-normal tracking-[-0.03em] m-0 leading-[1.1]">My Tech Stack</h2>
          </div>
        </div>
        
        <div className="bg-bg-card rounded-lg p-10 md:p-[60px] flex flex-col md:flex-row gap-10 md:gap-[60px] items-center mb-10 reveal">
          <div className="flex-1">
            <h3 className="font-display text-[28px] font-medium mb-4">Overview</h3>
            <p className="text-[16px] text-ink-soft leading-[1.6]">I build full stack applications using modern technologies and frameworks to deliver scalable, efficient and user-friendly digital experiences.</p>
          </div>
          <div className="flex-1 flex gap-[15px]">
            <img src="/assets/tech1.jpg" alt="Laptop with purple lighting" className="w-[30%] h-[160px] object-cover rounded-md" />
            <img src="/assets/tech2.jpg" alt="Dual monitor setup" className="w-[40%] h-[160px] object-cover rounded-md -translate-y-4" />
            <img src="/assets/tech3.jpg" alt="Code on dark screen" className="w-[30%] h-[160px] object-cover rounded-md" />
          </div>
        </div>
        
        <hr className="border-t border-line my-[60px]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[60px]">
          {/* Programming Languages */}
          <div className="reveal">
            <h3 className="font-display text-[20px] font-medium mb-6">Programming Languages</h3>
            <div className="flex flex-wrap gap-4">
              {['java', 'python', 'javascript', 'typescript', 'c'].map((tech) => (
                <div key={tech} className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-line rounded-md shadow-sm">
                  <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-${tech === 'java' || tech === 'python' || tech === 'javascript' || tech === 'typescript' || tech === 'c' ? 'original' : 'plain'}.svg`} alt={tech} className="w-5 h-5" />
                  <span className="text-[14px] font-medium capitalize">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="reveal">
            <h3 className="font-display text-[20px] font-medium mb-6">Frontend</h3>
            <div className="flex flex-wrap gap-4">
              {['html5', 'css3', 'javascript', 'typescript', 'react'].map((tech) => (
                <div key={tech} className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-line rounded-md shadow-sm">
                  <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`} alt={tech} className="w-5 h-5" />
                  <span className="text-[14px] font-medium capitalize">{tech.replace('3', '').replace('5', '')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="reveal">
            <h3 className="font-display text-[20px] font-medium mb-6">Backend</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-line rounded-md shadow-sm">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="Django" className="w-5 h-5" />
                <span className="text-[14px] font-medium">Django</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-line rounded-md shadow-sm">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="DRF" className="w-5 h-5" />
                <span className="text-[14px] font-medium">DRF</span>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="reveal">
            <h3 className="font-display text-[20px] font-medium mb-6">Database</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-line rounded-md shadow-sm">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="w-5 h-5" />
                <span className="text-[14px] font-medium">MySQL</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-line rounded-md shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#4479A1]"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                <span className="text-[14px] font-medium">SQL</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-line rounded-md shadow-sm">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-5 h-5" />
                <span className="text-[14px] font-medium">Firebase</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-line rounded-md shadow-sm">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt="Supabase" className="w-5 h-5" />
                <span className="text-[14px] font-medium">Supabase</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="reveal">
            <h3 className="font-display text-[20px] font-medium mb-6">Tools</h3>
            <div className="flex flex-wrap gap-4">
              {['git', 'github', 'intellij', 'pycharm', 'vscode'].map((tech) => (
                <div key={tech} className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-line rounded-md shadow-sm">
                  <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`} alt={tech} className="w-5 h-5" />
                  <span className="text-[14px] font-medium capitalize">{tech === 'intellij' ? 'IntelliJ IDEA' : tech === 'vscode' ? 'VS Code' : tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
