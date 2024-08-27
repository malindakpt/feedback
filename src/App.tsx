import React from 'react';
import './App.css';
import EmpImage from './Components/EmpImage';
import EmpList from './Components/EmpList';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompanyView from './Components/CompanyView';
import BranchView from './Components/BranchView';
import EmployeeView from './Components/EmployeeView';
import User from './Components/User/User';
import UserDetails from './Components/User/UserDetails';



function App() {
  
  const employeeobject = {
    empId: 'E001',
    empName: 'Nithila',
    imageUrl: 'https://randomuser.me/api/portraits/men/81.jpg',
  }

  const employees = [
    {
      empId: 'E001',
      empName: 'Kasun Dias',
      imageUrl: 'https://randomuser.me/api/portraits/men/81.jpg',
    },
    {
      empId: 'E002',
      empName: 'Shehani Peiris',
      imageUrl: 'https://randomuser.me/api/portraits/women/21.jpg',
    },
    {
      empId: 'E003',
      empName: 'Lego Man',
      imageUrl: 'https://randomuser.me/api/portraits/lego/5.jpg',
    },
    {
      empId: 'E004',
      empName: 'Chef Kiththa',
      imageUrl: 'https://randomuser.me/api/portraits/lego/8.jpg',
    },


  ]


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/empimage"
            element={
              <EmpImage
                 {...employeeobject}
                
              />
            }
          />
          <Route path='/emplist' element={<EmpList employees={employees}/>} />
          
          <Route path='/:companyId' element={<CompanyView/>} />
          <Route path='/:companyId/:branchId' element={<BranchView/>} />
          <Route path='/:companyId/:branchId/:employeeId' element={<EmployeeView/>} />

          <Route path='/users' element={<User/>} />
          <Route path='/users/:id' element={<UserDetails/>} />
          
        </Routes>
      </BrowserRouter>
    </div>


    
  );
}

export default App;
