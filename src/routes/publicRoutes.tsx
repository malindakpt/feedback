import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./mainLayout";

// PUBLIC PAGES
import BranchReviewPage from "../components/branch/reviews";
import LoginContainer from "../components/login/login.container";
// import RegisterContainer from "../components/";

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/login" element={<LoginContainer />} />
        {/* <Route path="/register" element={<RegisterContainer />} /> */}
        <Route path="/branch-review/:branchId" element={<BranchReviewPage />} />
        <Route path="/branch-list" element={<BranchReviewPage />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
