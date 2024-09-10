import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../login/LoginForm';
import { login } from './authSlice'; 
import { AppDispatch } from '../login/store'; 
import { useNavigate } from 'react-router-dom';

const LoginContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await dispatch(login({ email, password }));
      alert('Login successful');
      navigate('/admin/companyView');
    } catch (error) {
      console.error('Login error', error);
      alert('Unsuccessful Login. Please try again.');
    }
  };

  return (
    <LoginForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );
};

export default LoginContainer;
