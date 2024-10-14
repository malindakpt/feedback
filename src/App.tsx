import React from 'react';
import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import LoginContainer from './components/Admin/login/loginContainer';
import RegisterContainer from './components/Admin/registration/registerContainer';
import BranchManager from './components/branch/branchManager';
import AppRoutes from './Routes/Approutes';

=======
import AppRoutes from './routes/appRoutes';
>>>>>>> origin/main
const App: React.FC = () => {
  return (
      
    <div className="App">
    <AppRoutes />
    </div>
  );
}
    

export default App;
