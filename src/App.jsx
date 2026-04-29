import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import LanguageSwitcher from './components/LanguageSwitcher';
import FrameworkSwitcher from './components/FrameworkSwitcher';
import { useLanguage } from './LanguageContext';
import { portfolioData } from './data';

function App() {
  const { language } = useLanguage();
  const currentData = portfolioData[language];

  return (
    <div className="app">
      <FrameworkSwitcher />
      <LanguageSwitcher />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)' }}>
        <p>© {new Date().getFullYear()} {currentData.footer}</p>
      </footer>
    </div>
  );
}

export default App;
