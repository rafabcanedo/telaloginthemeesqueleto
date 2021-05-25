import React, { useState } from 'react';
import './App.css';
import Login from './components/login';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import { Button } from '@material-ui/core';

const StyledApp = styled.div`

color: ${props => props.theme.fontColor};

`;

function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
      <GlobalStyles />
      <StyledApp>
    <div className="App">
     <Login />
     <Button onClick={() => themeToggler()}>Dark Theme</Button>
    </div>
     </StyledApp>
    </ThemeProvider>
  );
}

export default App;

// aqui só importei
// useState para o darktheme/whitetheme
