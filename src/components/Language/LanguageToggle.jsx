import React from 'react';
// import '../styles/styles.css'; // Importe a folha de estilos CSS
// import '../styles/styles-dark.css';
// import '../styles/styles-light.css';

function LanguageToggle() {
  // const handleChangeLanguage = (event) => {
  //   const selectedLanguage = event.target.value;
  //   if (selectedLanguage === 'en') {
  //     window.location.href = 'index-en.html';
  //   } else {
  //     window.location.href = 'index.html';
  //   }
  // };

  return (
    <select id="language-select">
      <option>Language</option>
      <option value="pt-BR">Português</option>
      <option value="en">English</option>
    </select>
  );
}

export default LanguageToggle;
