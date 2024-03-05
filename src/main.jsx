import React from 'react'
import ReactDOM from 'react-dom/client'
/* COMPONENTE PRINCIPAL */
import App from './App.jsx'
import './index.css'

/* vincular react con el dom y los vinculamos a ese id*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
