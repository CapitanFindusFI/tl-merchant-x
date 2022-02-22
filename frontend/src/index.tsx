import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import GlobalStyle from "./styles";

ReactDom.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
