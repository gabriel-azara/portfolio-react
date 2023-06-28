import React from 'react';
// import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import Timeline from './Timeline';
import "./About.css"
const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section id="about">
        {/* <LanguageSelector /> */}
        <h2>{t('about.title')}</h2>
        {/* <h2>{t('about.bio')}</h2> */}
        <Timeline />
        {/* <p id="bio">{t('about.bio')}</p> */}
        <div className="sections">
          <h3>{t('about.education')}</h3>
        <ul>
          <li>{t('about.educationItem1')}</li>
          <li>{t('about.educationItem2')}</li>
        </ul>
        </div>
        <div className="sections">

        <h3>Hard Skills</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>WordPress</li>
          <li>Bootstrap</li>
        </ul>
        </div>
        <div className="sections">

        <h3>Soft Skills</h3>
        <ul>
          <li>{t('about.softSkill1')}</li>
          <li>{t('about.softSkill2')}</li>
          <li>{t('about.softSkill3')}</li>
        </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
