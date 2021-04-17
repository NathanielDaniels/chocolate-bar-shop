import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-blue: #0066CC;
    --main-red: #FF0000;
    --main-white: #FFFFFF;
    --main-black: #101010;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000;
    color: #333;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  ul {
    li {
      list-style: none;
    }
  }
`;