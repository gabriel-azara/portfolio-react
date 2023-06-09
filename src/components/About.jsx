import React from 'react';
// import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section id="about">
      {/* <LanguageSelector /> */}
        <h2>{t('about.title')}</h2>
        {/* <h2>{t('about.bio')}</h2> */}
        <p id="bio">{t('about.bio')}</p>
        <h3>{t('about.education')}</h3>
        <ul>
          <li>{t('about.educationItem1')}</li>
          <li>{t('about.educationItem2')}</li>
        </ul>
        <h3>Hard Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>WordPress</li>
        </ul>
        <h3>Soft Skills</h3>
        <ul>
          <li>Algo</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
