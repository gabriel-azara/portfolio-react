import React from 'react';
import './AboutThis.css';
import img1 from '../assets/images/components.png';
import img2 from '../assets/images/themecontext.png';
import img3 from '../assets/images/themetoggle.png';
import { useTranslation } from 'react-i18next';

const AboutThis = () => {
  const { t } = useTranslation();
  return (
    <section id="documentation">
      <h2>{t('portfolio.title')}</h2>
      <p className="documentationIntro">{t('portfolio.titleText')}</p>
      <div className="sections">
        <h3>{t('portfolio.about')}</h3>
        <p>{t('portfolio.aboutText')}</p>
      </div>
      <div className="sections">
        <h3>{t('portfolio.wasUsed')}</h3>
        <ul>
          <li>
            <h3>{t('portfolio.components')}</h3>
            <p>{t('portfolio.componentsText')}</p>
            <h5>App.js</h5>
            <img className="imgPortfolio" src={img1} alt="" />
          </li>
          <li>
            <h3>{t('portfolio.themeContext')}</h3>
            <p>{t('portfolio.themeContextText')}</p>
            <h5>ThemeContext.jsx</h5>
            <img className="imgPortfolio" src={img2} alt="" />
            <h5>ThemeToggle.jsx</h5>
            <img className="imgPortfolio" src={img3} alt="" />
          </li>
          <li>
            <h3>{t('portfolio.languageToggle')}</h3>
            <p>{t('portfolio.languageToggleText')}</p>
          </li>
          <li>
            <h3>{t('portfolio.axios')}</h3>
            <p>{t('portfolio.axiosText')}</p>
          </li>
          <li>
            <h3>{t('portfolio.hooks')}</h3>
            <p>{t('portfolio.hooksText')}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutThis;
