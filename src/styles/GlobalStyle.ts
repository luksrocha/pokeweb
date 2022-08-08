import { createGlobalStyle } from 'styled-components';
import VT323 from './VT323-Regular.ttf';
import Poppins from './Poppins.ttf';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    src: url(${VT323}) format('truetype');
    font-family: 'VT323';
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    src: url(${Poppins}) format('truetype');
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Roboto', 'Open Sans', sans-serif;
  } 

  html{
    @media (max-width:1080px){
      font-size:93.75%;
    }
    @media (max-width:720px){
      font-size: 87.5%;
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing:antialiased;
    font-family: 'Poppins', 'Roboto', 'Open Sans', sans-serif;
  }

  body, input, textarea, button {
    /* font-family: 'Poppins', sans-serif; */
    font-family: 'Poppins', 'Roboto', 'Open Sans', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }
`;
