import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBarContainer from '../components/appBar/appBarContainer';

const MainLayout: React.FC = () => {
  return (
    <>
      {/* Common AppBar */}
      <AppBarContainer />

      {/* Content */}
      <main style={{ marginTop: '64px', padding: '20px' }}> {/* Adjust for AppBar height */}
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
