import React from 'react';
// import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
// import AddEmployee from './components/addEmployee/addEmployee';
import AddEmployeeContainer from "./components/addEmployee/addEmployeeContainer";

import Example from "../src/hooks/example"

const App: React.FC = () => {
  return (
      
    <div className="App">
    <AppRoutes/>
    <Example/>
    </div>
  );
}
    

export default App;
