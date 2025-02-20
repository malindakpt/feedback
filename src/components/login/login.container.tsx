import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import LoginForm from './login';
import { login } from './appSlice';
import { AppDispatch } from './store';
import { useNavigate, useLocation } from 'react-router-dom';
import { LocationState } from '../../interfaces/locationState';

const LoginContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as LocationState)?.from?.pathname || '/homeViewContainer';

  const handleLogin = async (email: string, password: string) => {
    try {
      await dispatch(login({ email, password })).unwrap();  // Use unwrap to catch errors
      navigate(from); // Redirect after successful login
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid username or password');
    }
  };

  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );
};

export default LoginContainer;
