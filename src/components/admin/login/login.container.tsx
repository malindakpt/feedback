import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from './login';
import { login } from './appSlice'; 
import { AppDispatch } from './store';
import { useNavigate, useLocation } from 'react-router-dom';
import { LocationState } from '../../../interfaces/types';
import { showSnackbar } from '../../../services/snackbar.service';
import { PopupType } from '../../../enums/popupType.enum';

const LoginContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch: AppDispatch = useDispatch(); // Use AppDispatch for type-safe dispatch
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as LocationState)?.from?.pathname || '/admin/dashboard';
  // const { isAuthenticated, status, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = async () => {
    try {
      await dispatch(login({ email, password })).unwrap();  // Use unwrap to catch errors
      showSnackbar('Login Successful', PopupType.SUCCESS)
      navigate(from); // Redirect after successful login
    } catch (error) {
      console.error('Login error:', error);
      //alert('Login failed. Please try again.');
      showSnackbar('Login failed. Please try again.', PopupType.ERROR)
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
