import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../Routes/Privateroutes';

// ADMIN
import RegisterContainer from '../components/Admin/registration/registerContainer';
import LoginContainer from '../components/Admin/login/loginContainer';
import BranchManager from '../components/branch/branchManager';
import BranchView from '../components/Admin/branchView';
import CompanyView from '../components/Admin/companyView';
import BranchStatView from '../components/Admin/SingleView/branchStatView';
import EmployeeStatView from '../components/Admin/SingleView/employeeStatView';
import Dashboard from '../components/Admin/Dashboard';

// USER
import BranchFeedback from '../components/user/branchFeedback';
import EmployeeFeedback from '../components/user/employeesFeedback';
import SingleEmployeeFeedback from '../components/user/employerFeedback';

// LAYOUTS
import AdminLayout from '../Routes/AdminLayout';
import UserLayout from '../Routes/UserLayouts';

//my

import Charts from '../components/Shared/chartSample'; 
import Charts2 from '../components/Shared/Charts';
import { lineChartData, barChartData, pieChartData } from '../components/Shared/chartDemo';


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

        <Route path="chart" element={<Charts chartType={'line'} />} />
        <Route 
          path="rechart" 
          element={<Charts2 
            chartType="pie" 
            data={{ labels: lineChartData.map(d => d.label), datasets: [{ label: 'Temperature', data: lineChartData.map(d => d.Temperature) }] }} 
            title="Line Chart Example" 
          />} 
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
