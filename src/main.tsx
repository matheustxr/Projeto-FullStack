import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Routes.tsx'
import { BrowserRouter} from "react-router-dom";
import { AuthProvider } from "./contexts/Auth/AuthProvider.tsx";

import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)

