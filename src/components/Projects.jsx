import React from 'react';
// import '../styles/styles.css'; // Importe a folha de estilos CSS
// import '../styles/styles-dark.css';
// import '../styles/styles-light.css';
import imgProject1 from '../assets/images/project2.png';
import imgProject2 from '../assets/images/project1.png';
import './Projects.css';
// import { Code, Link } from '@phosphor-icons/react';
import { BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
// import * as simpleIcons from '@styled-icons/simple-icons'
import { ProjectLinks } from './ProjectLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faReact
} from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects">
      <h2 className="projectsTitle">{t('projects.title')}</h2>
      <div className="grid-container">
        <div className="project">
          <div className="projectTitle">
            <h3 className="projectTitles">
              {t('projects.project')} 1 - {t('projects.project1')}
            </h3>
            <ProjectLinks
              codeSrc={'https://github.com/gabriel-azara/EcommerceReact'}
              linkSrc={'https://ecommerce-react-xi-nine.vercel.app/'}
            />
          </div>
          <p className="projectDescription">{t('projects.project1Text')}</p>
          <div className="projectWrapper">
            <a
              className="projectLink"
              href="https://ecommerce-react-xi-nine.vercel.app/"
            >
              {/* <p>Click on here or in the image to proceed to the project link.</p> */}
              <img className="projectImg" src={imgProject1} alt="project" />
            </a>
          </div>
          <h4 className="techs">
            {t('projects.build')}{' '}
            {/* <FontAwesomeIcon icon={faHtml5} style={{ color: '#ff7b00' }} />
            <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#1f71ff' }} /> */}
            <FontAwesomeIcon
              title="React"
              icon={faReact}
              style={{ color: '#5291ff' }}
            />
            <TbBrandNextjs title="next.js" />
            <BiLogoTypescript title="Typescript" style={{ color: 'blue' }} />
            <BiLogoTailwindCss
              title="Tailwind.css"
              style={{ color: '#0ea5e9 ' }}
            />
          </h4>
        </div>
        <div className="project">
          {/* <h3>Título do Projeto 2</h3>
        <p>Descrição breve do projeto 2.</p> */}
          <div className="projectTitle">
            <h3 className="projectTitles">
              {t('projects.project')} 2 - Expenses
            </h3>
            <ProjectLinks
              codeSrc={'https://github.com/gabriel-azara/Expenses-React'}
              linkSrc={'https://expenses-react-six.vercel.app/'}
            />
          </div>
          <p className="projectDescription">
            Project made for expenses and showing some charts.
          </p>
          <div className="projectWrapper">
            <a
              className="projectLink"
              href="https://expenses-react-six.vercel.app/"
            >
              {/* <p>Click on here or in the image to proceed to the project link.</p> */}
              <img className="projectImg" src={imgProject2} alt="project" />
            </a>
          </div>
          <h4 className="techs">
            {t('projects.build')}{' '}
            <FontAwesomeIcon
              title="HTML"
              icon={faHtml5}
              style={{ color: '#ff7b00' }}
            />
            <FontAwesomeIcon
              title="CSS"
              icon={faCss3Alt}
              style={{ color: '#1f71ff' }}
            />
            <FontAwesomeIcon
              title="React"
              icon={faReact}
              style={{ color: '#5291ff' }}
            />
          </h4>
        </div>
        <div className="project">
          {/* <h3>Título do Projeto 2</h3>
        <p>Descrição breve do projeto 2.</p> */}
          <div className="projectTitle">
            <h3 className="projectTitles">Project 2 - Expenses</h3>
            <ProjectLinks
              codeSrc={'https://github.com/gabriel-azara/Expenses-React'}
              linkSrc={'https://expenses-react-six.vercel.app/'}
            />
          </div>
          <p className="projectDescription">
            Project made for expenses and showing some charts.
          </p>
          <div className="projectWrapper">
            <a
              className="projectLink"
              href="https://expenses-react-six.vercel.app/"
            >
              {/* <p>Click on here or in the image to proceed to the project link.</p> */}
              <img className="projectImg" src={imgProject2} alt="project" />
            </a>
          </div>
          <h4 className="techs">
            {t('projects.build')}{' '}
            <FontAwesomeIcon icon={faHtml5} style={{ color: '#ff7b00' }} />
            <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#1f71ff' }} />
            <FontAwesomeIcon icon={faReact} style={{ color: '#5291ff' }} />
          </h4>
        </div>
        <div className="project">
          {/* <h3>Título do Projeto 2</h3>
        <p>Descrição breve do projeto 2.</p> */}
          <div className="projectTitle">
            <h3 className="projectTitles">Project 2 - Expenses</h3>
            <ProjectLinks
              codeSrc={'https://github.com/gabriel-azara/Expenses-React'}
              linkSrc={'https://expenses-react-six.vercel.app/'}
            />
          </div>
          <p className="projectDescription">
            Project made for expenses and showing some charts.
          </p>
          <div className="projectWrapper">
            <a
              className="projectLink"
              href="https://expenses-react-six.vercel.app/"
            >
              {/* <p>Click on here or in the image to proceed to the project link.</p> */}
              <img className="projectImg" src={imgProject2} alt="project" />
            </a>
          </div>
          <h4 className="techs">
            {t('projects.build')}{' '}
            <FontAwesomeIcon icon={faHtml5} style={{ color: '#ff7b00' }} />
            <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#1f71ff' }} />
            <FontAwesomeIcon icon={faReact} style={{ color: '#5291ff' }} />
          </h4>
        </div>
      </div>
      {/* Adicione mais projetos conforme necessário */}
    </section>
  );
}

export default Projects;
