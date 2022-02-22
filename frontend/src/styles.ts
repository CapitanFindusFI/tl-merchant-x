import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, html {
        padding: 0;
        margin: 0;
    }

    * {
        box-sizing: border-box;
    }
`

export default GlobalStyle;