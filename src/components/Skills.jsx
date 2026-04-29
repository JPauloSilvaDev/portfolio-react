import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../LanguageContext';
import { portfolioData } from '../data';
import { 
  SiDotnet, SiAngular, SiReact, SiJavascript, SiJquery,
  SiDocker, SiKubernetes,
  SiMysql, SiMongodb 
} from 'react-icons/si';
import { FaDatabase, FaCode, FaServer, FaCloud, FaVial, FaSearch } from 'react-icons/fa';
import './Skills.css';

const getIconForTech = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes('c#')) return <FaCode color="#239120" />;
  if (t.includes('.net') || t.includes('asp.net')) return <SiDotnet color="#512bd4" />;
  if (t.includes('angular')) return <SiAngular color="#dd0031" />;
  if (t.includes('react')) return <SiReact color="#61dafb" />;
  if (t.includes('javascript')) return <SiJavascript color="#f7df1e" />;
  if (t.includes('jquery')) return <SiJquery color="#0769ad" />;
  if (t.includes('docker')) return <SiDocker color="#2496ed" />;
  if (t.includes('kubernetes')) return <SiKubernetes color="#326ce5" />;
  if (t.includes('azure')) return <FaCloud color="#0089d6" />;
  if (t.includes('sql server')) return <FaDatabase color="#cc292b" />;
  if (t.includes('mysql')) return <SiMysql color="#4479a1" />;
  if (t.includes('mongodb')) return <SiMongodb color="#47a248" />;
  if (t.includes('blazor') || t.includes('razor')) return <FaCode color="#512bd4" />;
  if (t.includes('entity') || t.includes('dapper')) return <FaDatabase color="#f8fafc" />;
  if (t.includes('api') || t.includes('micro')) return <FaServer color="#f8fafc" />;
  if (t.includes('xunit') || t.includes('selenium')) return <FaVial color="#f8fafc" />;
  if (t.includes('elastic')) return <FaSearch color="#005571" />;
  
  return <FaCode color="#f8fafc" />;
};

const Skills = () => {
  const { language } = useLanguage();
  const { hard, soft, title, softTitle } = portfolioData[language].skills;
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        <div className="skills-grid">
          {hard.map((category, index) => (
            <motion.div 
              key={index}
              className="glass-card skill-category"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="tech-list">
                {category.tech.map((tech, i) => (
                  <motion.div key={i} className="tech-item" variants={itemVariants}>
                    <div className="tech-icon">
                      {getIconForTech(tech)}
                    </div>
                    <span className="tech-name">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="glass-card soft-skills-card"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="category-title">{softTitle}</h3>
          <ul className="soft-skills-list">
            {soft.map((skill, index) => (
              <li key={index} className="soft-skill-item">
                <span className="check-icon">✓</span>
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
