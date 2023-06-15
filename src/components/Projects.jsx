import React from 'react';
// import '../styles/styles.css'; // Importe a folha de estilos CSS
// import '../styles/styles-dark.css';
// import '../styles/styles-light.css';
import imgProject from "../assets/images/project1.png"

function Projects() {
  return (
    <section id="projects">
      <h2>Meus Projetos</h2>
      <div className="project">
        <h3>Project 1 - Expenses</h3>
        <p>Project made for expenses and showing some charts.</p>
        <a href="https://expenses-react-six.vercel.app/">
          <p>Click on here or in the image to proceed to the project link.</p>
        <img src={imgProject} alt='project'/></a>
      </div>
      <div className="project">
        <h3>Título do Projeto 2</h3>
        <p>Descrição breve do projeto 2.</p>
      </div>
      {/* Adicione mais projetos conforme necessário */}
    </section>
  );
}

export default Projects;
