import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleIcon = theme === 'dark' ? faSun : faMoon;

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <button id="theme-toggle" className={`theme-toggle ${theme}`} onClick={handleToggleTheme}>
      <FontAwesomeIcon icon={toggleIcon} className="toggle-icon" />
      <span className="toggle-background"></span>
    </button>
  );
}

export default ThemeToggle;
