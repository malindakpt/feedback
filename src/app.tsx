import React from 'react';
// import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
// import AppRoutes from './routes/appRoutes';
import AddBranch from './components/admin/addBranch/addBranch';
const App: React.FC = () => {
  return (
      
    <div className="App">
    {/* <AppRoutes /> */}
    <AddBranch/>
    </div>
  );
}
    

export default App;
