// components/AdminRoute.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
    if (!isAuthenticated || isAuthenticated === 'false') {
      navigate('/adminlogin');
    }
  }, [navigate]);

  return children;
};

export default AdminRoute;
