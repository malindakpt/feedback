import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./privateRoutes";
import MainLayout from "./mainLayout";

// ADMIN
import RegisterContainer from '../components/admin/registration/register.container';
import LoginContainer from '../components/admin/login/login.container';
import BranchManager from '../components/branch/branchManager';
import BranchView from '../components/admin/branchView';
import CompanyView from '../components/admin/companyView';
import BranchStatView from '../components/admin/singleView/branchStatView';
import EmployeeStatView from '../components/admin/singleView/employeeStatView';

// USER
import BranchFeedback from "../components/usersView/branchFeedback";
import EmployeeFeedback from "../components/usersView/employeesFeedback";
import SingleEmployeeFeedback from "../components/usersView/employerFeedback";

// LAYOUTS
import AdminLayout from "./adminLayout";
import UserLayout from "./userLayouts";
import AddEmployeeContainer from "../components/admin/addEmployee/addEmployeeContainer";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/login?lang=en" />} />

          {/* ADMIN ROUTES */}
          <Route path="/login" element={<LoginContainer />} />
          <Route path="register" element={<RegisterContainer />} />
          <Route path="/admin" element={<AdminLayout />}>
            

            {/* Protected Admin Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="branch-manager" element={<BranchManager />} />
              <Route path="branchView" element={<BranchView />} />
              <Route path="companyView" element={<CompanyView />} />
              <Route path="branchStatView/:id" element={<BranchStatView />} />
              <Route
                path="employeeStatView/:id"
                element={<EmployeeStatView />}
              />
              {/* <Route path="dashboard" element={<Dashboard />} /> */}
            </Route>
            <Route path="add-employee" element={<AddEmployeeContainer />} />
          </Route>

          {/* USER ROUTES */}
          <Route path="/" element={<UserLayout />}>
            <Route path="branchFeedback/:id" element={<BranchFeedback />} />
            <Route path="employeesList/:id" element={<EmployeeFeedback />} />
            <Route path="employee/:id" element={<SingleEmployeeFeedback />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
