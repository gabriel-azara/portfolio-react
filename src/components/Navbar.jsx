import React from 'react';
import ThemeToggle from './Theme/ThemeToggle';
// import LanguageToggle from './LanguageToggle';
import LanguageSelector from './Language/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { UserRectangle, House, Notebook, FileDoc } from '@phosphor-icons/react';
import style from './Navbar.module.css'

function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">
            <House size={22} />
            {t('navbar.home')}
          </a>
        </li>
        <li>
          <a href="#about">
            <UserRectangle size={22} />
            {t('navbar.about')}
          </a>
        </li>
        <li>
        <a href="#documentation">
            <FileDoc size={22} />
            {t('navbar.thisProject')}
          </a>
        </li>
        <li>
          <a href="#projects">
            <Notebook size={22} />
            {t('navbar.projects')}
          </a>
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
