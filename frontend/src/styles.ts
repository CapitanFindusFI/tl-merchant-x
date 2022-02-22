import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body, html {
        padding: 0;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        background-color: #f6f6f6;
    }
`

export default GlobalStyle;