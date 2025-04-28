
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ProtectedRoute from './pages/ProtectedRoute'
import AdminProtectedRoute from './Admin/AdminProtectedRoute'

import Login from './pages/Login'
import Signup from './pages/Signup'
import LandingPage from './pages/LandingPage'
import UserPage from './pages/UserPage'
import MerchPage from './pages/MerchPage'
import EventPage from './pages/EventPage'
import EventDetailPage from './pages/EventDetailPage'
import ProductPreview from './pages/ProductPreview'
import GcashPayment from './pages/GcashPayment'
import Invoice from './pages/Invoice'




import AdminLogin from './Admin/AdminLogin'
import AdminMain from './Admin/AdminMain'
import AdminMembers from './Admin/AdminMembers'
import AdminDeletedMembers from './Admin/AdminDeletedMembers'
import AdminUpcomingEvents from './Admin/AdminUpcomingEvents'
import AdminDeletedEvents from './Admin/AdminDeletedEvents'
import AdminMerch from './Admin/AdminMerch'
import AdminDeletedMerch from './Admin/AdminDeletedMerch'
import AdminAddEvent from './Admin/AdminAddEvent'
import AdminAddMerch from './Admin/AdminAddMerch'
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
        <Route path="/productpreview" element={<ProductPreview />} />
        <Route path="/gcashpayment" element={<GcashPayment />} />
        <Route path="/invoice" element={<Invoice />} />





        {/* //admin side */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminmain" element={<AdminProtectedRoute><AdminMain /></AdminProtectedRoute>} />
        <Route path="/adminmembers" element={<AdminProtectedRoute><AdminMembers /></AdminProtectedRoute>} />
        <Route path="/admindeletedmembers" element={<AdminProtectedRoute><AdminDeletedMembers /></AdminProtectedRoute>} />
        <Route path="/adminupcomingevents" element={<AdminProtectedRoute><AdminUpcomingEvents /></AdminProtectedRoute>} />
        <Route path="/admindeletedevents" element={<AdminProtectedRoute><AdminDeletedEvents /></AdminProtectedRoute>} />
        <Route path="/adminmerch" element={<AdminMerch />} />
        <Route path="/admindeletedmerch" element={<AdminProtectedRoute><AdminDeletedMerch /></AdminProtectedRoute>} />
        <Route path="/adminaddevent" element={<AdminProtectedRoute><AdminAddEvent /></AdminProtectedRoute>} />
        <Route path="/adminaddmerch" element={<AdminAddMerch />} />
  
      </Routes>
    </BrowserRouter>
  </AuthProvider>
    
  )
}

export default App