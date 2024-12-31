import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return (
    <div>
      {/* Admin Navigation */}
      {/* <nav>Admin Navigation</nav> */}
      <main>
        <Outlet /> {/* Nested routes will be rendered here */}
      </main>
    </div>
  );
};

export default AdminLayout;
