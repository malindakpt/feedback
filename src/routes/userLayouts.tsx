import React from 'react';
import { Outlet } from 'react-router-dom';

const UserLayout: React.FC = () => {
  return (
    <div>
      {/* User Navigation */}
      {/* <nav>User Navigation</nav> */}
      <main>
        <Outlet /> {/* Nested routes will be rendered here */}
      </main>
    </div>
  );
};

export default UserLayout;
