import React from 'react';
import './AboutThis.css';
import img1 from '../assets/images/components.png';

const AboutThis = () => {
  return (
    <section id="documentation">
      <h2>Documentação do Portfólio</h2>
      <p className='documentationIntro'>
        Este é um documento que descreve as principais funcionalidades do meu
        projeto de portfólio desenvolvido em React.
      </p>
      <div className="sections">
      <h3>Visão Geral</h3>
      <p>
        Meu projeto de portfólio é uma aplicação web que apresenta minha
        experiência, habilidades e projetos. É uma forma de apresentar meu
        trabalho e permitir que potenciais empregadores, clientes ou
        colaboradores conheçam mais sobre mim e meus projetos.
      </p>
      </div>
      <div className="sections">
      <h3>O que foi utilizado nesse portfólio</h3>
      <ul>
        <li>
          <h3>Componentes</h3>
          <p>Falar sobre componentes</p>
          <img className='imgPortfolio' src={img1} alt="" />
        </li>
        <li>
          <h3>Troca de tema</h3>
          <p>Falar sobre troca do tema</p>
        </li>
        <li>
          <h3>Troca de idioma/Internacionalização(i18n)</h3>
          <p>Falar sobre troca de línguas</p>
        </li>
        <li>
          <h3>Utilização de Axios com API</h3>
          <p>Falar sobre axios e API</p>
        </li>
        <li>
          <h3> Utilização de hooks useState e useContext</h3>
          <p>falar dos hooks</p>
        </li>
      </ul>
      </div>
    </section>
  );
};

export default AboutThis;
