import React from 'react';
import { FaReact, FaAngular } from 'react-icons/fa';
import './FrameworkSwitcher.css';

const FrameworkSwitcher = () => {
  return (
    <div className="framework-switcher">
      <a href="#" className="framework-link active" title="Current: React">
        <FaReact className="framework-icon react" />
        <span>React</span>
      </a>
      <span className="framework-divider">|</span>
      <a href="https://JPauloSilvaDev.github.io/portfolio-angular" target="_blank" rel="noopener noreferrer" className="framework-link inactive" title="Switch to Angular Version">
        <FaAngular className="framework-icon angular" />
        <span>Angular</span>
      </a>
    </div>
  );
};

export default FrameworkSwitcher;
