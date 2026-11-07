import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Nosotros from './Nosotros.jsx';
import './styles.css';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

export function render(location = '/') {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={location} basename={basename}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </StaticRouter>
    </React.StrictMode>
  );
}