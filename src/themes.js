import { createGlobalStyle } from 'styled-components';
export const lightTheme = {
    body: '#fff',
    fontColor: '#000',
};

export const darkTheme = {
    body: '#000',
    fontColor: '#fff',
};

// tentativa active change theme
export const GlobalStyles = createGlobalStyle`

   body {
       background-color: ${(props) => props.theme.body};
   }

`

/* dei export para themeprovider no App.js */