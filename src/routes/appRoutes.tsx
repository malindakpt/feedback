import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./privateRoutes";
import PublicRoutes from "./publicRoutes";  
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

// LAYOUTS
import UserLayout from "./userLayouts";
import EditUserContainer from "../components/user/editUserConatainer";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={<PublicRoutes />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/login?lang=en" />} />

          {/* ADMIN ROUTES */}
<<<<<<< Updated upstream
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
=======
          <Route path="/admin" element={<AdminLayout />}>
            <Route element={<PrivateRoute />}>
              <Route path="branch-manager" element={<BranchManager />} />
              <Route path="branchView" element={<BranchView />} />
              <Route path="companyView" element={<CompanyView />} />
              <Route path="branchStatView/:id" element={<BranchStatView />} />
              <Route path="employeeStatView/:id" element={<EmployeeStatView />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Route>
>>>>>>> Stashed changes

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
