import React from 'react';
import useAuthenticatedUser from '../hooks/useAuthenticatedUser';

const AuthStatus: React.FC = () => {
  const { isAuthenticated, user } = useAuthenticatedUser();

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {user?.displayName || user?.email}</p>
      ) : (
        <p>User not logged in.</p>
      )}
    </div>
  );
};

export default AuthStatus;
