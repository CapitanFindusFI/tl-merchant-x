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

const _win = window as any;
if (_win.Cypress) {
  _win.store = store;
}
