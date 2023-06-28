import React, { useState, useEffect } from 'react';
import { UserRectangle, House, Notebook, FileDoc } from '@phosphor-icons/react';
import './Navbar.css';
import ThemeToggle from './Theme/ThemeToggle';
import LanguageSelector from './Language/LanguageSelector';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setShowButtons(showMenu);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
      {isMobile && (
        <div className="navbar-burger" onClick={handleMenuClick}>
          {!showMenu ? (
            <>
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </>
          ) : (
            <svg
              className="close-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={handleMenuClick}
            >
              <path
                fill="#333"
                d="M18.25 5.25L12 11.5l-6.25-6.25-1.5 1.5L10.5 12l-6.25 6.25 1.5 1.5L12 13.5l6.25 6.25 1.5-1.5L13.5 12l6.25-6.25z"
              />
            </svg>
          )}
        </div>
      )}
      {(!isMobile || showMenu) && (
        <ul className="navbar-menu">
          <li>
            <a href="#home">
              <House size={20} />
              {t('navbar.home')}
            </a>
          </li>
          <li>
            <a href="#about">
              <UserRectangle size={20} />
              {t('navbar.about')}
            </a>
          </li>
          <li>
            <a href="#documentation">
              <FileDoc size={20} />
              {t('navbar.thisProject')}
            </a>
          </li>
          <li>
            <a href="#projects">
              <Notebook size={20} />
              {t('navbar.projects')}
            </a>
          </li>
        </ul>
      )}
      <div className="navbar-buttons">
        {showButtons && (
          <>
            <ThemeToggle />
            <LanguageSelector />
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
