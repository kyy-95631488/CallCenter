import React from 'react';
import Particle from "./comonents/Particle.jsx";
import LandingPage from "./comonents/LandingPage.jsx";
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './theme';
import { GlobalStyles } from './global';
import "./index.css";
import DraggableButton from './comonents/Button'; // Fixed import path
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'; // Import the new icons

function App() {
  const [theme, setTheme] = React.useState('dark'); // Default to dark theme

  const handleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = theme === 'dark' ? DarkTheme : LightTheme;
  const icon = theme === 'light' ? faHeart : faStar; // Use the new icons

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <div className={`App ${theme}`}>
        <LandingPage />
        <Particle className="particle" />
        {/* Use the DraggableButton component with the new icons */}
        <DraggableButton onClick={handleTheme} icon={icon} />
      </div>
    </ThemeProvider>
  );
}
export default App;
