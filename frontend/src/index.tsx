import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import GlobalStyle from "./styles";
import store from "./store";
import { Provider } from "react-redux";

ReactDom.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);

if ((window as any).Cypress) {
  (window as any).store = store;
}
