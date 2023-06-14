import React from 'react';
import ThemeToggle from './Theme/ThemeToggle';
// import LanguageToggle from './LanguageToggle';
import LanguageSelector from './Language/LanguageSelector';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">{t('navbar.home')}</a>
        </li>
        <li>
          <a href="#about">{t('navbar.about')}</a>
        </li>
        <li>
          <a href="#projects">{t('navbar.projects')}</a>
        </li>
      </ul>
      <div className="navbar-buttons">
        <ThemeToggle />
        {/* <LanguageToggle /> */}
        <LanguageSelector />
      </div>
    </nav>
  );
}

export default Navbar;
