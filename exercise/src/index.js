import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import CoinTracker from './CoinTracker';
import MovieApp from './MovieApp';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <CoinTracker /> */}
    <MovieApp />
  </React.StrictMode>,
  document.getElementById('root')
);
