import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../components/Admin/login/store';

interface PrivateRouteProps {
  allowedRoles: Array<'admin' | 'superAdmin'>;
  redirectPath?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles, redirectPath = '/login' }) => {
  const { isAuthenticated, userRole } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (userRole && (userRole === 'admin' || userRole === 'superAdmin') && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
