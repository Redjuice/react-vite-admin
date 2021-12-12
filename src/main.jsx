import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@/utils/suppressWarn';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
