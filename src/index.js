import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Photos from './javascript/jsonservice';


const photo = new Photos();


ReactDOM.render(
  <React.StrictMode>
    <App photos={photo} />
  </React.StrictMode>,
  document.getElementById('root')
);
