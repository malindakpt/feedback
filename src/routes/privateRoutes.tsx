import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { RootState } from '../components/admin/login/store'; // Correct path to store

interface PrivateRouteProps {
  redirectPath?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ redirectPath = '/login' }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth); 
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={{from: location}} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
