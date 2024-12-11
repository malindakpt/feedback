import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { RootState } from '../components/admin/login/store'; // Correct path to store

interface PrivateRouteProps {
  redirectPath?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ redirectPath = '/login' }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth); 
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const lang = searchParams.get('lang') || 'en';

  if (!isAuthenticated) {
    return isAuthenticated ? <Outlet /> : <Navigate to={`/login?lang=${lang}`} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
