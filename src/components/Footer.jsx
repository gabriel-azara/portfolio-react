import React from 'react';
// import '../styles/styles.css'; // Importe a folha de estilos CSS
// import '../styles/styles-dark.css';
// import '../styles/styles-light.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <section id="contact">
        <h4 id="links">Links</h4>
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
      <p>&copy; Gabriel Azara.</p>
      <a href="./Currículo Gabriel Azara.pdf" download class="downloadBtn">
        Download Curriculo
      </a>
    </footer>
  );
}

export default Footer;
