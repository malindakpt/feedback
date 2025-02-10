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
import BranchManager from '../components/branch/branchManager';
import AddCompanyContainer from "../components/admin/comapany/addCompanyContainer";
import EditCompanyContainer from "../components/admin/comapany/editCompanyContainer";

// USER
import RegisterContainer from '../components/user/addUserContainer';
import LoginContainer from '../components/login/login.container';
import AddBranchContainer from '../components/branch/addBranchContainer';
import EditBranchContainer from '../components/branch/editBranchContainer';
import EmployeesByBranch from '../components/employee/employeesByBranch'

// LAYOUTS
import UserLayout from "./userLayouts";
import AddEmployeeContainer from "../components/admin/addEmployee/addEmployeeContainer";
import EditUserContainer from "../components/user/editUserConatainer";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/login?lang=en" />} />

          {/* ADMIN ROUTES */}
          <Route path="/login" element={<LoginContainer />} />
          <Route path="register" element={<RegisterContainer />} />
          
            {/* Protected Admin Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="branch-manager" element={<BranchManager />} />
              <Route path="company" element={<AddCompanyContainer />} />
              <Route path= "company/:id" element={<EditCompanyContainer />} />
              <Route path= "user/:id" element={<EditUserContainer />} />
              <Route path="branch" element={<AddBranchContainer />} />
              <Route path="branch/:id" element={<EditBranchContainer />} />
              <Route path="employees/:id" element={<EmployeesByBranch />} />
              <Route path="add-employee" element={<AddEmployeeContainer />} />

            </Route>
          
          {/* USER ROUTES */}
          <Route path="/" element={<UserLayout />}>
            
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
