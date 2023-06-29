import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  const { t, i18n } = useTranslation();

  const handleResumeDownload = () => {
    const language = i18n.language.toLowerCase();
    let resumeFile;

    if (language === 'pt' || language === 'pt-br') {
      resumeFile = 'Resume PT.pdf';
    } else if (language === 'en' || language === 'en-us') {
      resumeFile = 'Resume EN.pdf';
    }

    if (resumeFile) {
      // Create a temporary link and trigger the download
      const link = document.createElement('a');
      link.href = process.env.PUBLIC_URL + `${resumeFile}`;
      link.download = `Resume ${language.toUpperCase()}.pdf`;
      link.click();
    }
  };

  return (
    <footer>
      <section id="contact">
        <h4 id="links"></h4>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/gabriel-azara">
              <FaLinkedin /> <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.github.com/gabriel-azara">
              <FaGithub /> <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gabriel.azara">
              <FaInstagram /> <span>Instagram</span>
            </a>
          </li>
        </ul>
      </section>
      <p>&copy; Gabriel Ázara.</p>
      <div className="downloadBtn-container">
        <button onClick={handleResumeDownload} className="downloadBtn">
          {t('footer.download')}
        </button>
      </div>
    </footer>
  );
}

export default Footer;
