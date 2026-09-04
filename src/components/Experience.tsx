import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'idThirdeye Technology Solutions, Remote',
    meta: ['30 June 2026 - 29 July 2026'],
    role: 'Full Stack Developer Intern',
    desc: 'Worked on real-world projects using modern web technologies.',
    tags: ['Full Stack', 'Remote']
  },
  {
    title: 'Netflix Clone',
    meta: ['3 Sep 2026 - 4 Oct 2026'],
    role: '',
    desc: 'Developed a responsive Netflix clone with authentication, movie listings, and UI.',
    tags: ['React', 'CSS', 'Firebase']
  },
  {
    title: 'Hotstar Clone',
    meta: ['19 Oct 2026 - 20 Oct 2026'],
    role: '',
    desc: 'Built a Hotstar clone with video browsing UI, categories, and dynamic content.',
    tags: ['React', 'CSS', 'Firebase']
  },
  {
    title: 'Legal Metrology AI Sentinel',
    meta: ['Under Development', { label: 'GitHub', link: 'https://github.com/RatheeshS316/ecommerce-product-checker' }],
    role: '',
    desc: 'A mobile-first, AI-powered compliance platform that uses OCR, Computer Vision, and NLP to detect label mismatches, tampered products, and price manipulation.',
    tags: ['AI/ML', 'OCR', 'NLP']
  },
  {
    title: 'Disease Prediction',
    meta: [{ label: 'GitHub', link: 'https://github.com/RatheeshS316/disease-prediction' }],
    role: '',
    desc: 'A web-based disease prediction solution to help farmers identify diseases affecting plant leaves, fruits, and vegetables from affected plant images.',
    tags: ['React', 'Django', 'ML']
  },
  {
    title: 'Lost & Found',
    meta: [{ label: 'GitHub', link: 'https://github.com/RatheeshS316/lost-found' }],
    role: '',
    desc: 'A web-based Lost & Found platform that allows users to report lost products and upload details about found products to connect people with their missing belongings.',
    tags: ['Full Stack']
  },
  {
    title: 'Education',
    id: 'education',
    meta: ['Prathyusha Engineering College', 'B.E. CSE | 2023 - 2027 | CGPA: 7.25'],
    role: 'Computer Science and Engineering',
    desc: 'Undergraduate Student',
    tags: ['CSE', 'B.E.']
  },
  {
    title: 'Achievements',
    meta: ['2026'],
    role: 'CODEATHON 4.0 – Special Prize',
    desc: 'Participated in CODEATHON 4.0 organized by the Department of Computer Science and Engineering & Computer Science and Business Systems at Prathyusha Engineering College and secured a Special Prize.',
    tags: ['Award', 'Hackathon']
  }
];

const Experience: React.FC = () => {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="py-[60px] bg-bg" id="experience" aria-label="Experience and development journey">
      <div className="wrap">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10"
        >
          <div>
            <span className="eyebrow-pill mb-5"><span className="dot"></span> Experiences</span>
            <h2 className="font-display text-[clamp(40px,5vw,54px)] font-normal leading-[1.1] m-0">Explore My<br/>Development Journey</h2>
          </div>
          <div className="max-w-[400px]">
            <p className="text-ink-soft leading-[1.6] mb-5">I'm a passionate Full Stack Developer who loves building scalable web applications and exploring new technologies. I enjoy turning ideas into real-world products and creating seamless user experiences.</p>
            <Link to="/contact" className="link-arrow">
              <span>Book A Call</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
          className="flex flex-col"
        >
          {experiences.map((exp, index) => (
            <motion.div variants={revealVariants} key={index} id={exp.id} className="grid grid-cols-1 md:grid-cols-[320px_1fr_200px] gap-5 md:gap-10 py-10 border-t border-line items-start transition-all duration-300 hover:bg-pill hover:px-5 hover:-mx-5 hover:rounded-xl hover:border-t-transparent group">
              <div>
                <p className="text-[20px] font-medium m-0 mb-2.5">{exp.title}</p>
                <ul className="list-none p-0 m-0 flex flex-wrap gap-[15px] text-ink-soft text-[14px]">
                  {exp.meta.map((m, i) => (
                    <li key={i}>
                      {typeof m === 'string' ? m : (
                        <a href={m.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink transition-colors">{m.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                {exp.role && <p className="text-[18px] font-medium m-0 mb-2.5">{exp.role}</p>}
                <p className="text-[15px] text-ink-soft leading-[1.6] max-w-[500px] m-0">{exp.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-white border border-line rounded-md text-[13px] font-medium whitespace-nowrap">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Certifications row manually handled due to different structure */}
          <motion.div variants={revealVariants} className="grid grid-cols-1 md:grid-cols-[320px_1fr_200px] gap-5 md:gap-10 py-10 border-t border-line items-start transition-all duration-300 hover:bg-pill hover:px-5 hover:-mx-5 hover:rounded-xl hover:border-t-transparent group">
            <div>
              <p className="text-[20px] font-medium m-0 mb-2.5">Certifications</p>
            </div>
            <div>
              <ul className="m-0 pl-5 text-[15px] text-ink-soft leading-[1.6]">
                <li>Java Programming – NPTEL, 2024</li>
                <li>Python – Simplilearn | SkillUp</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              <span className="px-3 py-1.5 bg-white border border-line rounded-md text-[13px] font-medium whitespace-nowrap">Certificates</span>
            </div>
          </motion.div>

          <motion.div variants={revealVariants} className="grid grid-cols-1 md:grid-cols-[320px_1fr_200px] gap-5 md:gap-10 py-[60px] border-t border-line items-center">
            <div>
              <p className="text-[24px] font-medium m-0">Full Stack Developer + Game Developer</p>
            </div>
            <div>
              <p className="text-[18px] text-ink leading-[1.6] m-0">Building the web today.<br/>Creating worlds tomorrow.</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              <span className="px-3 py-1.5 bg-white border border-line rounded-md text-[13px] font-medium whitespace-nowrap">Full Stack</span>
              <span className="px-3 py-1.5 bg-white border border-line rounded-md text-[13px] font-medium whitespace-nowrap">Game Dev</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
