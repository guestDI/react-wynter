import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
    }
    html {
        height: 100%;
    }
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Dosis', sans-serif;
        transition: all 0.50s linear;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        letter-spacing: 0.1rem;
        font-size: 12px;
    } 
`
