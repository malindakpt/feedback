import React from 'react';
import './App.css';
import EmpImage from './Components/EmpImage';
import EmpList from './Components/EmpList';
import ImageAvatars from './Components/EmpImage2';
import ImageAvatars2 from './Components/EmpImage3';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
          <Route path="/avatars" element={<ImageAvatars />} />
          <Route path='/avatars2' element={<ImageAvatars2/>}/>
        </Routes>
      </BrowserRouter>
    </div>


    
  );
}

export default App;
