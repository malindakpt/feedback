import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./mainLayout";

// PUBLIC PAGES
import BranchReviewPage from "../components/branch/reviews";
import LoginContainer from "../components/admin/login/login.container";
import RegisterContainer from "../components/admin/registration/register.container";

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<RegisterContainer />} />
        <Route path="/branch-review/:branchId" element={<BranchReviewPage />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
