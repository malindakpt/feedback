import React from 'react';
// import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
// import AddEmployee from './components/addEmployee/addEmployee';
import AddEmployeeContainer from "./components/addEmployee/addEmployeeContainer";

import EmployeeReviewPage from "./hooks/employeeReview"

const App: React.FC = () => {
  return (
      
    <div className="App">
    {/* <AddEmployeeContainer/> */}
    <AppRoutes/>
    </div>
  );
}
    

export default App;
