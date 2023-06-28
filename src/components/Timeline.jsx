import React, { useState } from 'react';
import './Timeline.css';
import { useTranslation } from 'react-i18next';

const Timeline = () => {
  const { t } = useTranslation();

  const [selectedYear, setSelectedYear] = useState(2014);

  const handleYearClick = year => {
    setSelectedYear(year);
  };

  const timelineData = {
    2014: t('about.bio2014'),
    2017: t('about.bio2017'),
    2018: t('about.bio2018'),
    2019: t('about.bio2019'),
    2022: t('about.bio2022'),
    2023: t('about.bio2023')
    // Adicione mais textos para os anos desejados
  };

  return (
    <div>
      <h2>{t('about.timeline')}</h2>
      <div className="timeline">
        <div className="timelineWrapper">
          2014
          <button
            className={`timeline-button ${
              selectedYear === 2014 ? 'selected' : ''
            }`}
            onClick={() => handleYearClick(2014)}
          ></button>
        </div>
        <div className="timelineWrapper">
          2017
          <button
            className={`timeline-button ${
              selectedYear === 2017 ? 'selected' : ''
            }`}
            onClick={() => handleYearClick(2017)}
          ></button>
        </div>
        <div className="timelineWrapper">
          2018
          <button
            className={`timeline-button ${
              selectedYear === 2018 ? 'selected' : ''
            }`}
            onClick={() => handleYearClick(2018)}
          ></button>
        </div>
        <div className="timelineWrapper">
          2019
          <button
            className={`timeline-button ${
              selectedYear === 2019 ? 'selected' : ''
            }`}
            onClick={() => handleYearClick(2019)}
          ></button>
        </div>
        <div className="timelineWrapper">
          2022
          <button
            className={`timeline-button ${
              selectedYear === 2022 ? 'selected' : ''
            }`}
            onClick={() => handleYearClick(2022)}
          ></button>
        </div>
        <div className="timelineWrapper">
          2023
          <button
            className={`timeline-button ${
              selectedYear === 2023 ? 'selected' : ''
            }`}
            onClick={() => handleYearClick(2023)}
          ></button>
        </div>
        {/* Adicione mais botões com os anos desejados */}
      </div>
      {selectedYear && (
        <div className="sections">
          <div className="timeline-content">
            <h3>Ano {selectedYear}</h3>
            <p>{timelineData[selectedYear]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
