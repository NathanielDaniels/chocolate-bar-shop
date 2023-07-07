import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  .Toastify {
    z-index: 9999;
  }

.snippet {
  position: relative;
  top: 10px;
  left: 20px;
  .dot-pulse {     
      position: relative;
      left: -9999px;  
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: var(--main-yellow);
      color: var(--main-yellow);
      box-shadow: 9999px 0 0 -5px;
      animation: dot-pulse 1.5s infinite linear;
      animation-delay: 0.25s;
    }
    .dot-pulse::before, .dot-pulse::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: var(--main-yellow);
      color: var(--main-yellow);
    }
    .dot-pulse::before {
      box-shadow: 9984px 0 0 -5px;
      animation: dot-pulse-before 1.5s infinite linear;
      animation-delay: 0s;
    }
    .dot-pulse::after {
      box-shadow: 10014px 0 0 -5px;
      animation: dot-pulse-after 1.5s infinite linear;
      animation-delay: 0.5s;
    }

    @keyframes dot-pulse-before {
      0% {
        box-shadow: 9984px 0 0 -5px;
      }
      30% {
        box-shadow: 9984px 0 0 2px;
      }
      60%, 100% {
        box-shadow: 9984px 0 0 -5px;
      }
    }
    @keyframes dot-pulse {
      0% {
        box-shadow: 9999px 0 0 -5px;
      }
      30% {
        box-shadow: 9999px 0 0 2px;
      }
      60%, 100% {
        box-shadow: 9999px 0 0 -5px;
      }
    }
    @keyframes dot-pulse-after {
      0% {
        box-shadow: 10014px 0 0 -5px;
      }
      30% {
        box-shadow: 10014px 0 0 2px;
      }
      60%, 100% {
        box-shadow: 10014px 0 0 -5px;
      }
    }
}
  ${
    "" /* .dot-pulse {
    border: 2px solid yellow;
      display: inline-block;
      position: relative;
      width: 20px;
      height: 20px;
    }

    .dot-pulse::before,
    .dot-pulse::after,
    .dot-pulse::nth-child(2) {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: var(--main-yellow);
      color: var(--main-yellow);
      opacity: 0;
      animation: dot-pulse 1.5s infinite linear;
    }

    .dot-pulse::before {
      left: 0;
      animation-delay: 0s;
    }

    .dot-pulse::after {
      right: 0;
      animation-delay: 1s;
    }

    .dot-pulse::nth-child(2) {
      left: 50%;
      transform: translateX(-50%);
      animation-delay: 0.5s;
    }

    @keyframes dot-pulse {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    } */
  }

  .loading {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--main-yellow)
    ${
      "" /* .dot-pulse {                        
      position: relative;
      left: -9999px;  
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: #9880ff;
      color: #9880ff;
      box-shadow: 9999px 0 0 -5px;
      animation: dot-pulse 1.5s infinite linear;
      animation-delay: 0.25s;
    }
    .dot-pulse::before, .dot-pulse::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: #9880ff;
      color: #9880ff;
    }
    .dot-pulse::before {
      box-shadow: 9984px 0 0 -5px;
      animation: dot-pulse-before 1.5s infinite linear;
      animation-delay: 0s;
    }
    .dot-pulse::after {
      box-shadow: 10014px 0 0 -5px;
      animation: dot-pulse-after 1.5s infinite linear;
      animation-delay: 0.5s;
    }

    @keyframes dot-pulse-before {
      0% {
        box-shadow: 9984px 0 0 -5px;
      }
      30% {
        box-shadow: 9984px 0 0 2px;
      }
      60%, 100% {
        box-shadow: 9984px 0 0 -5px;
      }
    }
    @keyframes dot-pulse {
      0% {
        box-shadow: 9999px 0 0 -5px;
      }
      30% {
        box-shadow: 9999px 0 0 2px;
      }
      60%, 100% {
        box-shadow: 9999px 0 0 -5px;
      }
    }
    @keyframes dot-pulse-after {
      0% {
        box-shadow: 10014px 0 0 -5px;
      }
      30% {
        box-shadow: 10014px 0 0 2px;
      }
      60%, 100% {
        box-shadow: 10014px 0 0 -5px;
      }
    } */
    }
  }

  :root {
    --main-blue: #0066CC;
    --main-bright-blue: #0066CC;
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
    width: 100%;
    max-width: 100vw;
    font-family: 'Poppins', 'Helvetica Neue', 'Roboto', Helvetica, Arial, sans-serif;
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
