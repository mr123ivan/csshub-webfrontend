import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
    const isAdminAuthenticated = localStorage.getItem("isAdminAuthenticated") === "true";
    console.log("isAdminAuthenticated: ", isAdminAuthenticated); // Add this line
    return isAdminAuthenticated ? children : <Navigate to="/adminlogin" />;
  };
  
export default AdminProtectedRoute;
