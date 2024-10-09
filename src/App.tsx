import React from 'react';
import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import loginContainer from './components/Admin/login/loginContainer';
import RegisterContainer from './components/Admin/registration/registerContainer';
import BranchManager from './components/branch/branchManager';
import AppRoutes from './Routes/Approutes';
import Charts from './components/Shared/chartJs';
import { lineChartData, barChartData, pieChartData } from './components/Shared/chartData';
const App: React.FC = () => {
  return (
      
    <div className="App">
      <AppRoutes />
      <div>
      <Charts chartType="line" data={lineChartData} title="Temperature Over Months" showTitle={true} />
      <Charts chartType="pie" data={barChartData} title="Votes Per Color" showTitle={false} />
      <Charts chartType="pie" data={pieChartData} title="Market Share Distribution" showTitle={true} />
    </div>
    </div>
  );
}
    

export default App;
