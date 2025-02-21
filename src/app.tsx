import React from 'react';
// // import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import { Provider } from 'react-redux';
import { store } from './components/login/store';
import AddBranchContainer from './components/branch/addBranchContainer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <div className="App">
    {/* <AppRoutes /> */}
    <AddBranchContainer/>
    </div>
  </Provider>
    
  );
}
    

export default App;
