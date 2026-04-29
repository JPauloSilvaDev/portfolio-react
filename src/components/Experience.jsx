import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../LanguageContext';
import { portfolioData } from '../data';
import './Experience.css';

const Experience = () => {
  const { language } = useLanguage();
  const { items, title } = portfolioData[language].experience;

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title text-gradient">{title}</h2>
        
        <div className="timeline">
          {items.map((job, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div 
                key={index} 
                className="timeline-item"
                ref={ref}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="timeline-dot"></div>
                <div className="glass-card timeline-content">
                  <span className="period">{job.period}</span>
                  <h3 className="role">{job.role}</h3>
                  <h4 className="company">{job.company}</h4>
                  
                  <div className="job-details">
                    <p className="description">
                      <strong>{job.situationLabel}</strong>
                      {job.description}
                    </p>
                    <p className="results">
                      <strong>{job.resultLabel}</strong>
                      {job.results}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
