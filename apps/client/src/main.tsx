import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Auth0Context } from "@/contexts"
import { BrowserRouter } from 'react-router-dom'
import { store } from '@/app'
import { Provider } from "react-redux"
import { AntdTheme } from '@/theme'
import { UserLoader } from '@/features/user/components/UserLoader.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Context>
          <AntdTheme>
            <App />
          </AntdTheme>
        </Auth0Context>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
