import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import '../styles/styles.css'; // Importe a folha de estilos CSS

function Header() {
  const [userPhoto, setUserPhoto] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const username = 'gabriel-azara';
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        const data = response.data;

        setUserPhoto(data.avatar_url);
        setUserName(data.name || username);
      } catch (error) {
        console.log('Erro ao buscar dados do GitHub:', error);
      }
    }

    fetchGitHubData();
  }, []);

  return (
    <header>
      <h1 id="username">{userName}</h1>
      <img id="user-photo" src={userPhoto} alt="Sua Foto" />
    </header>
  );
}

export default Header;
