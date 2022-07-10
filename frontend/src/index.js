import React from "react";
import ReactDOM from "react-dom";
import Main from "./containers/Main";
import "./style.css";
import { HashRouter } from "react-router-dom";
ReactDOM.render(
    <HashRouter>
      <Main />
    </HashRouter>,
  document.querySelector("#root")
);