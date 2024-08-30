import React from 'react';
import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import LoginContainer from './components/Admin/login/login_container';
import RegisterContainer from './components/Admin/registration/regiter_container';
import BranchManager from '../src/components/branch/branch_manager';
import AppRoutes from './Routes/Approutes';
const App: React.FC = () => {
  return (
      
    <div className="App">
      <AppRoutes />
    </div>
  );
}
    

export default App;
