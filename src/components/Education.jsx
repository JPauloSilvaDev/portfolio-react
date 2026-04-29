import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../LanguageContext';
import { portfolioData } from '../data';
import { FaGraduationCap, FaCertificate, FaLanguage } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const { language } = useLanguage();
  const { items, languages, certifications, title, edTitle, langTitle, certTitle } = portfolioData[language].education;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          {title}
        </motion.h2>

        <div className="education-grid">
          <motion.div 
            className="glass-card ed-card"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ delay: 0.1 }}
          >
            <h3 className="card-title">
              <FaGraduationCap className="card-icon" /> {edTitle}
            </h3>
            {items.map((ed, idx) => (
              <div key={idx} className="ed-item">
                <span className="period">{ed.period}</span>
                <h4 className="course">{ed.course}</h4>
                <p className="institution">{ed.institution}</p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="glass-card ed-card"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <h3 className="card-title">
              <FaLanguage className="card-icon" /> {langTitle}
            </h3>
            <ul className="lang-list">
              {languages.map((lang, idx) => (
                <li key={idx} className="lang-item">
                  <span className="lang-name">{lang.language}</span>
                  <span className="lang-level">{lang.proficiency}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="glass-card ed-card"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ delay: 0.3 }}
          >
            <h3 className="card-title">
              <FaCertificate className="card-icon" /> {certTitle}
            </h3>
            <ul className="cert-list">
              {certifications.map((cert, idx) => (
                <li key={idx} className="cert-item">
                  <span className="check-icon">★</span>
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
