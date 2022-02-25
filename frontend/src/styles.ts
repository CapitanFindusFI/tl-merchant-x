import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    :root {
        --palette-black: #00171F;
        --palette-white: #ffffff;
        --palette-blue: #003459;
        --palette-red: #dc3545;
    }

    body, html {
        padding: 0;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        background-color: var(--palette-black);
    }
`

export default GlobalStyle;