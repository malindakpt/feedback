import React from 'react';
import ExamplePage from './components/examplePage';
// import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
// import AppRoutes from './routes/appRoutes';
const App: React.FC = () => {
  return (
      
    <div className="App">
    {/* <AppRoutes /> */}
    <ExamplePage/>
    </div>
  );
}
    

export default App;
