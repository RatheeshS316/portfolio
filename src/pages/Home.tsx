import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home: React.FC = () => {
  useScrollReveal();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Home;
