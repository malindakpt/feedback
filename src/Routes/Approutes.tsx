import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../Routes/Privateroutes';

// ADMIN
import RegisterContainer from '../components/Admin/registration/registerContainer';
import LoginContainer from '../components/Admin/login/loginContainer';
import BranchManager from '../components/branch/branchManager';
import BranchView from '../Components/Admin/branchView';
import CompanyView from '../Components/Admin/companyView';
import BranchStatView from '../Components/Admin/SingleView/branchStatView';
import EmployeeStatView from '../Components/Admin/SingleView/employeeStatView';
import Dashboard from '../Components/Admin/Dashboard';

// USER
import BranchFeedback from '../Components/user/branchFeedback';
import EmployeeFeedback from '../Components/user/employeesFeedback';
import SingleEmployeeFeedback from '../Components/user/employerFeedback';

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
            <Route path="dashboard" element={<Dashboard />} />
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
