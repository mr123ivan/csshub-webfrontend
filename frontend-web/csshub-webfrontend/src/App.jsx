
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
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
        <Route path="/adminmain" element={<AdminMain />} />
        <Route path="/adminmembers" element={<AdminMembers />} />
        <Route path="/admindeletedmembers" element={<AdminDeletedMembers />} />
        <Route path="/adminupcomingevents" element={<AdminUpcomingEvents />} />
        <Route path="/admindeletedevents" element={<AdminDeletedEvents />} />
        <Route path="/adminmerch" element={<AdminMerch />} />
        <Route path="/admindeletedmerch" element={<AdminDeletedMerch />} />
  
      </Routes>
    </BrowserRouter>
  </AuthProvider>
    
  )
}

export default App