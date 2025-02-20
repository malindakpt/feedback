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
import AddCompanyContainer from "../components/admin/comapany/addCompanyContainer";
import EditCompanyContainer from "../components/admin/comapany/editCompanyContainer";

// USER
import RegisterContainer from '../components/user/addUserContainer';
import LoginContainer from '../components/login/login.container';
import AddBranchContainer from '../components/branch/addBranchContainer';
import EditBranchContainer from '../components/branch/editBranchContainer';
import EmployeesByBranch from '../components/employee/employeesByBranch';
import UserviewContainer from '../components/user/userViewContainer'
import CompanyViewContainer from '../components/company/companyViewContainer'
import BranchViewContainer from "../components/branch/branchViewContainer";
import CompanyReview from "../components/company/companyReview";
import BranchReview from "../components/branch/branchReview";
import EmployeeReview from '../components/employee/employeeReview';
import ReviewView from "../components/review/reviewView";
import HomeViewContainer from '../components/homeView/homeViewContainer';

// LAYOUTS
import UserLayout from "./userLayouts";
import EditUserContainer from "../components/user/editUserConatainer";
import CompanyAccess from "./companyAccess";
import BranchAccess from "./branchAccess";
import EmployeeAccess from "./employeeAccess";
import AdminAccess from "./adminAccess";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Navigate to="/login?lang=en" />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="register" element={<RegisterContainer />} />
          <Route path="/homeViewContainer" element={<HomeViewContainer />} />

          <Route element={<AdminAccess />}>
            <Route path="/addCompany" element={<AddCompanyContainer />} />
          </Route>

          {/* STAT VIEW ROUTES */}
          <Route element={<CompanyAccess />}>
            <Route path="company/:compId" element={<CompanyViewContainer />}></Route> Show all branches, show pennding users for comapany, add branch link
            <Route path="company/:compId/edit" element={<EditCompanyContainer />}></Route> Show all branches
            <Route path="company/:compId/branch/add" element={<AddBranchContainer />}></Route>
          </Route>

          <Route element={<BranchAccess />}>
            <Route path="company/:compId/branch/:branchId" element={<BranchViewContainer />}></Route> Show all EMployees, , show pennding users for branch
            <Route path="company/:compId/branch/:branchId/edit" element={<EditBranchContainer />}></Route> edit , delete branch
            <Route path="company/:compId/branch/:branchId/employeeList" element={<EmployeesByBranch />}></Route>  Show all EMployees
          </Route>

          <Route element={<EmployeeAccess />}>
            <Route path="company/:compId/branch/:branchId/user/:uId" element={<UserviewContainer />}></Route>
            <Route path="company/:compId/branch/:branchId/user/:uId/edit" element={<EditUserContainer />}></Route>
            <Route path="company/:compId/branch/:branchId/user/:uId/review/:reviewId" element={<ReviewView />}></Route>  review data
          </Route>

          {/* ADD REVIEW ROUTES */}
          <Route path="review">
            <Route path="company/:compId" element={<CompanyReview />}></Route> SHow all branches
            <Route path="company/:compId/branch/:branchId" element={<BranchReview />}></Route> SHow all EMployees
            <Route path="company/:compId/branch/:branchId/employee/:employeeId" element={<EmployeeReview />}></Route>  Show all reviews DESC
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
