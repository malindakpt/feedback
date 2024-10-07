import React from 'react';
import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import loginContainer from './components/Admin/login/loginContainer';
import RegisterContainer from './components/Admin/registration/registerContainer';
import BranchManager from './components/branch/branchManager';
import AppRoutes from './Routes/Approutes';
import ChartComponent from './components/Shared/chartJs';
import { lineChartData, barChartData, pieChartData } from './components/Shared/chartData';
const App: React.FC = () => {
  return (
      
    <div className="App">
      <AppRoutes />
      <div style={{ marginTop: '20px' }}>
          <ChartComponent chartType="line" data={lineChartData} title="Line Chart Example" />
          <ChartComponent chartType="bar" data={barChartData} title="Bar Chart Example" />
          <ChartComponent chartType="pie" data={pieChartData} title="Pie Chart Example" />
        </div>
    </div>
  );
}
    

export default App;
