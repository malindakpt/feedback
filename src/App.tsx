import React from 'react';
import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import BarChart from './components/Shared/barChart';
import LineChart from './components/Shared/lineChart';
import PieChart from './components/Shared/pieChart';
import { barChartData, lineChartData, pieChartData } from './components/Shared/chartData';

const App: React.FC = () => {
  return (
      
    <div className="App">
    {/* <AppRoutes /> */}


      <BarChart title="Bar Chart Example" data={barChartData} showTitle={true} />
      <LineChart title="Line Chart Example" data={lineChartData} showTitle={false} />
      <PieChart title="Pie Chart Example" data={pieChartData} showTitle={true} />
    </div>

    
  );
}
    

export default App;
