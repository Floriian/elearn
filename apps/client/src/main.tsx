import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Auth0Context} from "@/contexts"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Context>
      <App/>
    </Auth0Context>
  </React.StrictMode>,
)
