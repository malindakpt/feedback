import React from 'react';
// // import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
// import AppRoutes from './routes/appRoutes';
import QrCode from './components/qrCode/qrCode';

const App: React.FC = () => {
  return (
      
    <div className="App">
    {/* <AppRoutes /> */}
    <QrCode/>
    </div>
  );
}
    

export default App;
