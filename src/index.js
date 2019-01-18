import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.css";

import "./config/Reactotron";

import { Provider } from "react-redux";
import store from "./store";

import Routes from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
