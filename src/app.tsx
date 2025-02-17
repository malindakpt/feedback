import React from 'react';
// // import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import BranchDetails from './services/example'


const App: React.FC = () => {
  return (
      
    <div className="App">
    {/* <AppRoutes /> */}
    <BranchDetails/>
    </div>
  );
}
    

export default App;
