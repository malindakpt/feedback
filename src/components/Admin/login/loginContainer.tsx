import React, { useState } from 'react';
import LoginForm from './loginForm';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../services/auth/firebase';
import { useDispatch } from 'react-redux';
import { login } from './authslice';

const LoginContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async(username: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
    } catch (error) {
      console.error('Registration error', error);
      alert('Unsuccessful Login. Please try again.');
    }
    dispatch(login());
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
