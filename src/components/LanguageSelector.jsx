import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const [ language, setLanguage] = useState(navigator.language);
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  const isCurrentLanguage = (language) => {
    return language === i18n.language;
  };

  return (
    <select id="language-select" defaultValue={navigator.language} onChange={handleChangeLanguage}>
      <option value={navigator.language}>
        {navigator.language}
      </option>
      <option value="pt-BR" defaultValue={isCurrentLanguage('pt-BR')}>
        Português
      </option>
      <option value="en-US" defaultValue={isCurrentLanguage('en-US')}>
        English
      </option>
    </select>
  );
};

export default LanguageSelector;
