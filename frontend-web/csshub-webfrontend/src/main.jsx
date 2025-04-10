import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css';  // or './app.css' depending on your setup
import {useAuthProvider } from './pages/AuthProvider';


const {AuthProvider} = useAuthProvider();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <App />
    </AuthProvider>
   
  </React.StrictMode>,
)


