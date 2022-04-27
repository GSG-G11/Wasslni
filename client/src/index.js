import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './scss/custom.scss';

import UserProvider from './context/userProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
);
