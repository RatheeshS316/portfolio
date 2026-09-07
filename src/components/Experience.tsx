import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    category: 'ML / Django',
    title: 'Disease Prediction',
    url: 'disease-prediction.vercel.app',
    subtitle: 'Agricultural disease detection from plant images',
    desc: 'A web-based disease prediction solution to help farmers identify diseases affecting plant leaves, fruits, and vegetables from affected plant images.',
    tags: ['React.js', 'Django', 'Machine Learning'],
    image: '/assets/card_springboot.jpg',
    githubLink: 'https://github.com/RatheeshS316/disease-prediction',
    demoLink: '#'
  },
  {
    category: 'Full Stack',
    title: 'Lost & Found',
    url: 'lost-and-found.vercel.app',
    subtitle: 'Platform connecting people with missing belongings',
    desc: 'A web-based Lost & Found platform that allows users to report lost products and upload details about found products to connect people with their missing belongings.',
    tags: ['React.js', 'Django', 'PostgreSQL'],
    image: '/assets/tech3.jpg',
    githubLink: 'https://github.com/RatheeshS316/lost-found',
    demoLink: '#'
  },
  {
    category: 'React / Firebase',
    title: 'Netflix Clone',
    url: 'netflix-clone.vercel.app',
    subtitle: 'Responsive Netflix clone with authentication & UI',
    desc: 'Developed a responsive Netflix clone featuring user authentication, dynamic movie listings, and a polished user interface matching the original design.',
    tags: ['React.js', 'CSS', 'Firebase'],
    image: '/assets/card_tailwind.jpg',
    githubLink: 'https://github.com/RatheeshS316/netflix-clone',
    demoLink: '#'
  },
  {
    category: 'React / Firebase',
    title: 'Hotstar Clone',
    url: 'hotstar-clone.vercel.app',
    subtitle: 'Video browsing UI with dynamic categories',
    desc: 'Built a Hotstar clone with video browsing UI, categories, and dynamic content fetching. Focused on creating a seamless media consumption experience.',
    tags: ['React.js', 'CSS', 'Firebase'],
    image: '/assets/card_nextjs.jpg',
    githubLink: 'https://github.com/RatheeshS316/disney-hotstar-clone',
    demoLink: '#'
  },
  {
    category: 'Internship / Full Stack',
    title: 'idThirdeye Technology Solutions',
    url: 'idthirdeye.com',
    subtitle: 'Full Stack Developer Intern — 30 June to 29 July 2026',
    desc: 'Worked on real-world projects using modern web technologies. Gained hands-on experience in building scalable applications and exploring new technologies.',
    tags: ['Full Stack', 'Remote'],
    image: '/assets/tech1.jpg',
    githubLink: null,
    demoLink: '#'
  },
  {
    category: 'Education',
    title: 'Prathyusha Engineering College',
    url: 'prathyusha.edu.in',
    subtitle: 'B.E. Computer Science and Engineering | 2023 - 2027',
    desc: 'Undergraduate Student maintaining a CGPA of 7.25. Exploring modern web technologies, AI/ML, and game development.',
    tags: ['CSE', 'B.E.', 'Student'],
    image: '/assets/about_card_photo.jpg',
    githubLink: null,
    demoLink: null
  },
  {
    category: 'Achievement',
    title: 'CODEATHON 4.0 – Special Prize',
    url: 'codeathon2026.com',
    subtitle: 'Special Prize Winner — 2026',
    desc: 'Participated in CODEATHON 4.0 organized by the Department of Computer Science and Engineering & Computer Science and Business Systems at Prathyusha Engineering College and secured a Special Prize.',
    tags: ['Award', 'Hackathon'],
    image: '/assets/card_dsa.jpg',
    githubLink: null,
    demoLink: null
  }
];

const Experience: React.FC = () => {
  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="py-[100px] bg-[#050505]" id="experience" aria-label="Experience and development journey">
      <div className="wrap">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealVariants}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[80px] gap-10"
        >
          <div>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 py-2 px-[18px] rounded-full text-[14px] text-white font-medium mb-5"><span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span> Experiences</span>
            <h2 className="font-display text-[clamp(40px,5vw,54px)] font-normal leading-[1.1] m-0 text-white">Explore My<br/>Development Journey</h2>
          </div>
          <div className="max-w-[400px]">
            <p className="text-gray-400 leading-[1.6] mb-5">I'm a passionate Full Stack Developer who loves building scalable web applications and exploring new technologies. I enjoy turning ideas into real-world products and creating seamless user experiences.</p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-[60px]">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={revealVariants} 
              className="flex flex-col lg:flex-row gap-0 bg-[#0a0a0a] rounded-2xl overflow-hidden border border-purple-500/10 shadow-2xl transition-all duration-300 hover:border-purple-500/30"
            >
              {/* Left Side: Browser / Image */}
              <div className="w-full lg:w-[50%] bg-[#0a0a0a] border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col">
                {/* Browser Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#111]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-md px-4 py-1 text-[11px] text-white/40 border border-white/5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    {exp.url}
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-500/10 text-green-400 text-[11px] px-2.5 py-1 rounded-full border border-green-500/20 uppercase tracking-wide font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                    Live
                  </div>
                </div>
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full w-full bg-[#111] overflow-hidden">
                  <img src={exp.image} className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" alt={exp.title} />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full lg:w-[50%] p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-[13px] font-medium border border-purple-500/20">
                    {exp.category}
                  </span>
                  <span className="text-[60px] font-bold text-white/5 tracking-tighter leading-none select-none">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
                
                <h3 className="text-[32px] font-bold text-white mb-3 tracking-tight">{exp.title}</h3>
                
                {exp.subtitle && (
                  <div className="flex items-start gap-2 mb-6 text-purple-400 text-[15px] font-medium">
                    <svg className="w-4 h-4 mt-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <p className="leading-snug">{exp.subtitle}</p>
                  </div>
                )}

                <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-10">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[13px] font-medium tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  {exp.githubLink && (
                    <a href={exp.githubLink} className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-lg text-[15px] font-medium transition-colors w-full sm:w-auto">
                      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
