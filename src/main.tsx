import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/Routes.tsx'
import { BrowserRouter} from "react-router-dom";
import { AuthProvider } from "./contexts/Auth/antigo/AuthProvider.tsx";

import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)

