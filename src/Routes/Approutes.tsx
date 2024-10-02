import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import PrivateRoute from './privateRoutes';

// ADMIN
import RegisterContainer from '../components/admin/registration/registerContainer';
import LoginContainer from '../components/admin/login/loginContainer';
import BranchManager from '../components/branch/branchManager';
import BranchView from '../components/admin/branchView';
import CompanyView from '../components/admin/companyView';
import BranchStatView from '../components/admin/singleView/branchStatView';
import EmployeeStatView from '../components/admin/singleView/employeeStatView';
import Dashboard from '../components/admin/dashboardView';

// USER
import BranchFeedback from '../components/UsersView/branchFeedback';
import EmployeeFeedback from '../components/UsersView/employeesFeedback';
import SingleEmployeeFeedback from '../components/UsersView/employerFeedback';

// LAYOUTS
import AdminLayout from './adminLayout';
import UserLayout from './userLayouts';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

        {/* ADMIN ROUTES */}
        <Route path="login" element={<LoginContainer />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="register" element={<RegisterContainer />} />
          
          {/* Protected Admin Routes */}
          <Route element={<PrivateRoute />}>
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
