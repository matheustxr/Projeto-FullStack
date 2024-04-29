import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/Routes.tsx'
import { BrowserRouter} from "react-router-dom";
import { UserProvider } from './contexts/Auth/UserContext.tsx';

import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
)

