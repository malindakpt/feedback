import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../login/loginForm';
import { login } from './AppSlice'; 
import { AppDispatch } from '../login/store';
import { useNavigate } from 'react-router-dom';

const LoginContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch: AppDispatch = useDispatch(); // Use AppDispatch for type-safe dispatch
  const navigate = useNavigate();
  // const { isAuthenticated, status, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = async () => {
    try {
      await dispatch(login({ email, password })).unwrap();  // Use unwrap to catch errors
      alert('Login successful');
      navigate('/admin/companyView'); // Redirect after successful login
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
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
