import React from 'react';
// import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import Snackbar from './components/util/snackbar'
const App: React.FC = () => {
  return (
      <div className="App">
      <AppRoutes />
      <Snackbar />
      </div>
  );
}
    

export default App;
