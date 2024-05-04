import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import { UserProvider } from './contexts/Auth/UserContext';
import { AuthGoogleProvider } from './contexts/Auth/AuthGoogle';

import './main.css';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AuthGoogleProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthGoogleProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
