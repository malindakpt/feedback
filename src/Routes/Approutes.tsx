import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../components/Admin/login/authslice';
import PrivateRoute from './Privaterotes';

// ADMIN
import RegisterContainer from '../components/Admin/registration/registerContainer';
import LoginContainer from '../components/Admin/login/loginContainer';
import BranchManager from '../components/branch/branch_manager';
import BranchView from '../components/Admin/branchView';
import CompanyView from '../components/Admin/companyView';
import BranchStatView from '../components/Admin/single_view/branchStatView';
import EmployeeStatView from '../components/Admin/single_view/employeeStatView';

// USER
import BranchFeedback from '../components/user/branchFeedback';
import EmployeeFeedback from '../components/user/employeesFeedback';
import SingleEmployeefeedback from '../components/user/employerFeedback';

// LAYOUTS
import AdminLayout from '../Routes/AdminLayout';
import UserLayout from '../Routes/UserLayouts';

const AppRoutes: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Router>
      <Routes>

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="register" element={<RegisterContainer />} />
          <Route path="login" element={<LoginContainer />} />
          <PrivateRoute path="branch-manager" element={<BranchManager />} />
          <PrivateRoute path="branchView" element={<BranchView />} />
          <PrivateRoute path="companyView" element={<CompanyView />} />
          <PrivateRoute path="branchStatView/:id" element={<BranchStatView />} />
          <PrivateRoute path="employeeStatView/:id" element={<EmployeeStatView />} />
        </Route>

        {/* USER ROUTES */}
        <Route path="/" element={<UserLayout />}>
          <Route path="branchFeedback/:id" element={<BranchFeedback />} />
          <Route path="employeesList/:id" element={<EmployeeFeedback />} />
          <Route path="employee/:id" element={<SingleEmployeefeedback />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default AppRoutes;
