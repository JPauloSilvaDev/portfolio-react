import React from 'react';
import { useLanguage } from '../LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className="lang-switcher" onClick={toggleLanguage} aria-label="Toggle Language">
      <span className={`lang-text ${language === 'pt' ? 'active' : ''}`}>PT</span>
      <span className="lang-divider">|</span>
      <span className={`lang-text ${language === 'en' ? 'active' : ''}`}>EN</span>
    </button>
  );
};

export default LanguageSwitcher;
