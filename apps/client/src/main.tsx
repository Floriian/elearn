import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from '@/app'
import { Provider } from "react-redux"
import { AntdTheme } from '@/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AntdTheme>
          <App />
        </AntdTheme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
