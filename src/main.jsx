import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './features/auth/AuthContext'
import { ProdProvider } from './features/auth/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProdProvider>
        <App />
      </ProdProvider>
    </AuthProvider>
  </StrictMode>,
)
