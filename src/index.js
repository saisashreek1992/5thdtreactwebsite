<<<<<<< Updated upstream
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
>>>>>>> Stashed changes
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
<<<<<<< Updated upstream
  useLocation
} from "react-router-dom";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
  useLocation,
} from "react-router-dom";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js";
import reportWebVitals from "./reportWebVitals";
>>>>>>> Stashed changes

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

