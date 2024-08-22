import React from 'react';
import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import LoginContainer from './components/login/login_container';
import RegisterContainer from './components/registration/regiter_container';
const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterContainer />} />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
