import React from 'react';
import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import Chart from './components/Shared/charts';
import { barChartData, lineChartData, chartData3, pieChartData } from './components/Shared/chartData';

const App: React.FC = () => {
  return (
      
    <div className="App">
    {/* <AppRoutes /> */}


      <Chart  data={barChartData}/>
      <Chart  data={lineChartData}/>
      <Chart  data={pieChartData}/>
      <Chart   data={chartData3}/>
    </div>

    
  );
}
    

export default App;
