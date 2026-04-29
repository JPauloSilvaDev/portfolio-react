import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../LanguageContext';
import { portfolioData } from '../data';
import './About.css';

const About = () => {
  const { language } = useLanguage();
  const { profile, location } = portfolioData[language].personalInfo;
  const { nav } = portfolioData[language];
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {nav.about}
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="glass-card about-card"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="profile-text">{profile}</p>
            <div className="location-info">
              <span className="location-icon">📍</span> {location}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
