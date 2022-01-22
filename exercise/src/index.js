import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CoinTracker from './CoinTracker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CoinTracker />
  </React.StrictMode>,
  document.getElementById('root')
);
