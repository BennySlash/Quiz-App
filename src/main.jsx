import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import {
  ClassComponent,
  FunctionalComponent,
} from "./components/quiz/Test.jsx";
// import "../node_modules/materialize-css/dist/js/materialize.min.js";
// import "../node_modules/@mdi/font/css/materialdesignicons.min.css";
// import "../node_modules/materialize-css/dist/css/materialize.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
