import React from 'react';
// // import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import Example from './components/shared/muiCharts/example';




const App: React.FC = () => {
  return (
      
    <div className="App">
    {/* <AppRoutes /> */}
    <Example/>
    </div>
  );
}
    

export default App;
