import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './nav.css';
import Services from './Components/Services';
import About from './Components/Pages/About';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    
  </Router>,
  document.getElementById('root')
);

