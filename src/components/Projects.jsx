import React from 'react';
// import '../styles/styles.css'; // Importe a folha de estilos CSS
// import '../styles/styles-dark.css';
// import '../styles/styles-light.css';
import imgProject from '../assets/images/project1.png';
import './Projects.css';
// import { Code, Link } from '@phosphor-icons/react';
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import { ProjectLinks } from './ProjectLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faReact
} from '@fortawesome/free-brands-svg-icons';

function Projects() {
  return (
    <section id="projects">
      <h2 className="projectsTitle">Meus Projetos</h2>
      <div className="grid-container">
        <div className="project">
          <div className="projectTitle">
            <h3 className="projectTitles">Project 1 - Expenses</h3>
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
              <img className="projectImg" src={imgProject} alt="project" />
            </a>
          </div>
          <h4 className="techs">
            It was built with:{' '}
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
              <img className="projectImg" src={imgProject} alt="project" />
            </a>
          </div>
          <h4 className="techs">
            It was built with:{' '}
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
              <img className="projectImg" src={imgProject} alt="project" />
            </a>
          </div>
          <h4 className="techs">
            It was built with:{' '}
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
              <img className="projectImg" src={imgProject} alt="project" />
            </a>
          </div>
          <h4 className="techs">
            It was built with:{' '}
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
