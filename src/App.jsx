import React, { useState } from 'react';
import './styles/styles.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/ThemeContext';
import { useTranslation } from 'react-i18next';


const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // const { t } = useTranslation();

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
