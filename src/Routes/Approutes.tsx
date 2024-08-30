import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ADMIN
import RegisterContainer from '../components/Admin/registration/regiter_container';
import LoginContainer from '../components/Admin/login/login_container';
import BranchManager from '../components/branch/branch_manager';
import Branch_view from '../components/Admin/branch_view';
import Company_view from '../components/Admin/company_view';
import S_Branchview from '../components/Admin/single_view/s_branchview';
import S_Employeeview from '../components/Admin/single_view/s_employeeview';

// USER
import Branch_feedback from '../components/User/branch_feedback';
import Employee_feedback from '../components/User/employee_feedback';
import Single_Employee_feedback from '../components/User/single_employee_feedback';

// LAYOUTS
import AdminLayout from '../Routes/AdminLayout';
import UserLayout from '../Routes/UserLayouts';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="register" element={<RegisterContainer />} />
          <Route path="login" element={<LoginContainer />} />
          <Route path="branch-manager" element={<BranchManager />} />
          <Route path="branch-view" element={<Branch_view />} />
          <Route path="company-view" element={<Company_view />} />
          <Route path="branch-view/:id" element={<S_Branchview />} />
          <Route path="employee-view/:id" element={<S_Employeeview />} />
        </Route>

        {/* USER ROUTES */}
        <Route path="/" element={<UserLayout />}>
          <Route path="branch_feedback" element={<Branch_feedback />} />
          <Route path="employees_list" element={<Employee_feedback />} />
          <Route path="employee/:id" element={<Single_Employee_feedback />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default AppRoutes;
