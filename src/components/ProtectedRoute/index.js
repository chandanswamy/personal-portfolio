import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = () => {
  const token = Cookies.get('jwt_token');

  if (token !== undefined) {
    return <Outlet />
    
  }else{
    return <Navigate to="/login" />
  }

  
};

export default ProtectedRoute;
