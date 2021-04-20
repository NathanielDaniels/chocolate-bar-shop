import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap');
  :root {
    --main-blue: #0066CC;
    --main-red: #FF0000;
    --main-white: #FFFFFF;
    --main-black: #101010;
    --main-yellow: #F5E719;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    ${'' /* max-width: 1600px;
    margin: 0 auto; */}
    ${'' /* border: 2px solid red; */}
    width: 100vw;
    height: 100%;
    font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--main-blue);
    color: #333;
    font-size: 16px;
    overflow-x: hidden;
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