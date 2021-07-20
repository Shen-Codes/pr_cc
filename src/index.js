import React from 'react';
import ReactDOM from 'react-dom';
import DogsContextProvider from './store/DogsContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <DogsContextProvider>
      <App />
    </DogsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

