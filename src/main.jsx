import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Nosotros from './Nosotros.jsx';
import Projects from './Projects.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/proyectos" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);