import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { portfolioData } from '../data';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const { language } = useLanguage();
  const { name, title, linkedin, github, email, greeting } = portfolioData[language].personalInfo;

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="greeting"
          >
            {greeting}
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="name text-gradient"
          >
            {name}
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="title"
          >
            {title}
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="social-links"
          >
            <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href={`mailto:${email}`} className="social-icon">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
