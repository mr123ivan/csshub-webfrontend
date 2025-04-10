
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import LandingPage from './pages/LandingPage'
import UserPage from './pages/UserPage'
// import AuthProvider from './pages/AuthProvider'
import { AuthProvider } from './pages/AuthProvider'; // Corrected import for named export


function App() {
  return (

    <AuthProvider>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userpage" element={<UserPage />} />
  
      </Routes>
    </BrowserRouter>
  </AuthProvider>
    
  )
}

export default App