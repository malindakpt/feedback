import React from 'react';
import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import LoginContainer from './components/login/login_container';
import RegisterContainer from './components/registration/regiter_container';
// import AddBranchForm from './components/branch/Addbranchform';
// import EditBranchForm from './components/branch/Editbranchform';
import BranchManager from '../src/components/branch/branch_manager';
const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          {/* <Route path="/branch/addbranch" element={<AddBranchForm />} /> */}
          <Route path="/branch" element={<BranchManager />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
