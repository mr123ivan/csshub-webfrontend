
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import LandingPage from './pages/LandingPage'
import UserPage from './pages/UserPage'
import MerchPage from './pages/MerchPage'
import EventPage from './pages/EventPage'
import EventDetailPage from './pages/EventDetailPage'





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
        <Route path="/merchpage" element={<MerchPage />} />
        <Route path="/eventpage" element={<EventPage />} />
        <Route path="/eventdetailpage" element={<EventDetailPage />} />
  
      </Routes>
    </BrowserRouter>
  </AuthProvider>
    
  )
}

export default App