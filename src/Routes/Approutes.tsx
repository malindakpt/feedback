import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../Routes/Privateroutes';

// ADMIN
import RegisterContainer from '../components/Admin/registration/registerContainer';
import LoginContainer from '../components/Admin/login/LoginContainer';
import BranchManager from '../components/branch/branchManager';
import BranchView from '../components/Admin/branchView';
import CompanyView from '../components/Admin/companyView';
import BranchStatView from '../components/Admin/SingleView/branchStatView';
import EmployeeStatView from '../components/Admin/SingleView/employeeStatView';

// USER
import BranchFeedback from '../components/user/branchFeedback';
import EmployeeFeedback from '../components/user/employeesFeedback';
import SingleEmployeeFeedback from '../components/user/employerFeedback';

// LAYOUTS
import AdminLayout from '../Routes/AdminLayout';
import UserLayout from '../Routes/UserLayouts';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* ADMIN ROUTES */}
        <Route path="login" element={<LoginContainer />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="register" element={<RegisterContainer />} />
          
          {/* Protected Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={['admin', 'superAdmin']} />}>
            <Route path="branch-manager" element={<BranchManager />} />
            <Route path="branchView" element={<BranchView />} />
            <Route path="companyView" element={<CompanyView />} />
            <Route path="branchStatView/:id" element={<BranchStatView />} />
            <Route path="employeeStatView/:id" element={<EmployeeStatView />} />
          </Route>
        </Route>

        {/* USER ROUTES */}
        <Route path="/" element={<UserLayout />}>
          <Route path="branchFeedback/:id" element={<BranchFeedback />} />
          <Route path="employeesList/:id" element={<EmployeeFeedback />} />
          <Route path="employee/:id" element={<SingleEmployeeFeedback />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;