import React from "react";
import LoginContainer from "./components/login/login_container";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RegisterContainer from "./components/register/register_container";
// import Welcome from "./Welcome"; 
// import PrivateRoute from "./PrivateRoute"; 
// import { Route } from "react-router-dom";

function App() {
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
}

export default App;
