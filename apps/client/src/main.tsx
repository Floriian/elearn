import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Auth0Context } from "@/contexts"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Context>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Context>
  </React.StrictMode>,
)
