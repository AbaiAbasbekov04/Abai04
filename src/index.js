import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nameform from './App';
import Fios from './FIO/Fioform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nameform />
    <Fios/>
  </React.StrictMode>
);

