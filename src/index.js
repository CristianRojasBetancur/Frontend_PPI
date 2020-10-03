import React from "react";
import ReactDOM from "react-dom";
import Prueba from './pages/Home'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

/*import App from "./App";*/

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Prueba />
  </React.StrictMode>,
  rootElement
);
