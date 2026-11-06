import React from 'react'
import ReactDOM from 'react-dom/client'
// brand.css va antes de App para que el CSS de cada página (importado por App) pueda
// sobrescribir las clases .bx- con igual especificidad.
import './styles/brand.css'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
