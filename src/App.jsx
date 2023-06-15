import React, { useState } from 'react';
import './styles/styles.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/Theme/ThemeContext';
import AboutThis from './components/AboutThis'


const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
    {/* <ThemeProvider /> */}
      <div className={`app ${theme}`}>
        <Navbar />
        <Header />
        <About />
        <AboutThis />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
