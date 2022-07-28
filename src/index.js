import React from 'react';
import reactDOM from 'react-dom';
import './index.css';
import App from './app';
import { ContextProvider } from './contexts/ContextProvider';
reactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
