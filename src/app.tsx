import React from 'react';
// import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import { SnackbarProvider } from './components/util/snackbar';
const App: React.FC = () => {
  return (
    <SnackbarProvider>
      <div className="App">
      <AppRoutes />
      </div>
    </SnackbarProvider>
  );
}
    

export default App;
