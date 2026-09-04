import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const portfolioItems = [
  { category: 'Development', time: '5 min read', title: 'DSA', desc: 'Mastering Data Structures and Algorithms for problem solving and efficient coding.', img: '/assets/card_dsa.jpg' },
  { category: 'Aptitude', time: '5 min read', title: 'Aptitude', desc: 'Improving logical reasoning, quantitative ability and problem-solving skills.', img: '/assets/card_aptitude.jpg' },
  { category: 'Backend', time: '5 min read', title: 'Spring Boot', desc: 'Building robust, scalable and production-ready backend applications.', img: '/assets/card_springboot.jpg' },
  { category: 'Database', time: '5 min read', title: 'PostgreSQL', desc: 'Working with powerful, open source relational database management system.', img: '/assets/card_postgresql.jpg' },
  { category: 'Devops', time: '5 min read', title: 'Docker', desc: 'Containerizing applications for consistent development and deployment.', img: '/assets/card_docker.jpg' },
  { category: 'Animation', time: '5 min read', title: 'GSAP', desc: 'Creating smooth, high-performance animations for modern web experiences.', img: '/assets/card_gsap.jpg' },
  { category: 'Styling', time: '5 min read', title: 'Tailwind CSS', desc: 'Building beautiful, responsive and utility-first UI with rapid development.', img: '/assets/card_tailwind.jpg' },
  { category: 'Framework', time: '5 min read', title: 'Next JS', desc: 'Building fast, SEO-friendly and full-stack React applications with Next.js.', img: '/assets/card_nextjs.jpg' },
];

const Portfolio: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="pt-[60px] pb-[120px] bg-bg" id="portfolio" aria-label="Latest works">
      <div className="wrap">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}
          className="mb-[60px]"
        >
          <span className="eyebrow-pill mb-5"><span className="dot"></span> Portfolio</span>
          <h2 className="font-display text-[clamp(40px,5vw,54px)] font-normal tracking-[-0.03em] m-0">Latest Works</h2>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-[100px]"
        >
          {portfolioItems.map((item, i) => (
            <motion.a 
              variants={itemVariants}
              key={i} 
              href="#contact" 
              className="group flex flex-col bg-bg-card rounded-md overflow-hidden no-underline transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" 
              aria-label={`${item.title} — ${item.desc}`}
            >
              <div className="w-full aspect-[4/3] bg-[#f5f5f5] overflow-hidden">
                <img src={item.img} alt={`${item.title} illustration`} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-[25px] flex flex-col flex-1">
                <div className="flex justify-between items-center text-[13px] font-medium mb-[15px]">
                  <span className="text-ink">{item.category}</span>
                  <span className="text-ink-soft">{item.time}</span>
                </div>
                <p className="font-display text-[22px] font-medium m-0 mb-[10px]">{item.title}</p>
                <p className="text-[14px] text-ink-soft leading-[1.6] m-0">{item.desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}
          className="bg-ink text-white rounded-[24px] p-10 md:p-[80px] flex flex-col items-center text-center" id="cta"
        >
          <h3 className="font-display text-[clamp(32px,4vw,42px)] font-normal tracking-[-0.02em] m-0 mb-5">Have a Project in Mind?</h3>
          <p className="text-[17px] text-white/70 leading-[1.6] max-w-[500px] m-0 mb-10">I am currently available for freelance work! If you are looking for a developer to build your next web application, website, or digital product, I can help bring your vision to life.</p>
          <Link to="/contact" className="inline-flex items-center gap-[6px] text-[15px] font-medium text-ink bg-white px-8 py-4 rounded-full transition-opacity duration-200 hover:opacity-90">
            <span>Book A Call</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
