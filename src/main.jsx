import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './main.css'
import PhotoProvider from './context/PhotoContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PhotoProvider>
        <App />
      </PhotoProvider>
    </BrowserRouter>
  </React.StrictMode>
)
