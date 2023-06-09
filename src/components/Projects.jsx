import React from 'react';
// import '../styles/styles.css'; // Importe a folha de estilos CSS
// import '../styles/styles-dark.css';
// import '../styles/styles-light.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Meus Projetos</h2>
      <div className="project">
        <h3>Título do Projeto 1</h3>
        <p>Descrição breve do projeto 1.</p>
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
