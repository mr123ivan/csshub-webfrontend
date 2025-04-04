import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// main.jsx or index.js
import './index.css';  // or './app.css' depending on your setup


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
