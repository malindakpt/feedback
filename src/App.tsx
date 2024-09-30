import React from 'react';
import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './Routes/Approutes';
const App: React.FC = () => {
  return (
      
    <div className="App">
    <AppRoutes />
    </div>
  );
}
    

export default App;
