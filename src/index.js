import React from 'react';
import ReactDOM from 'react-dom/client';

/* - import below allows us to add routing. We wrap it aroud our <App />
/  - In root.render, we initialize this router package and make it aware of our app
/  and ensure that it watches our URL
*/
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter >
    <App />
  </BrowserRouter> 
);
