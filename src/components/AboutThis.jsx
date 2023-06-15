import React from 'react';
import './AboutThis.css';
import img1 from '../assets/images/components.png';

const AboutThis = () => {
  return (
    <div className="documentation">
      <h2>Documentação do Portfólio</h2>
      <p>
        Este é um documento que descreve as principais funcionalidades do meu
        projeto de portfólio desenvolvido em React.
      </p>
      <h2>Visão Geral</h2>
      <p>
        Meu projeto de portfólio é uma aplicação web que apresenta minha
        experiência, habilidades e projetos. É uma forma de apresentar meu
        trabalho e permitir que potenciais empregadores, clientes ou
        colaboradores conheçam mais sobre mim e meus projetos.
      </p>
      <h2>O que foi utilizado nesse portfólio</h2>
      <ul>
        <li>
          <h3>Componentes</h3>
          <p>Falar sobre componentes</p>
          <img src={img1} alt="" />
        </li>
        <li>
          <h3>Troca de tema</h3>
          <p>Falar sobre troca do tema</p>
        </li>
        <li>
          <h3>Troca de língua/Internacionalização(i18n)</h3>
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
  );
};

export default AboutThis;
