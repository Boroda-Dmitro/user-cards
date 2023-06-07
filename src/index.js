import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import App from './Components/App';
import WebFont from 'webfontloader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter basename="/user-cards">
          <App />
        </BrowserRouter>
  </React.StrictMode>
);

WebFont.load({
  google: {
    families: ['Montserrat:400,500,600,700'],
  },
});
