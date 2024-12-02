import React from 'react';
// import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import AddEmployee from './components/addEmployee/addEmployee';
const App: React.FC = () => {
  return (
      
    <div className="App">
    <AddEmployee />
    </div>
  );
}
    

export default App;
