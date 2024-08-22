import React, { useState } from 'react';
import LoginForm from './login_form';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/auth/firebase';

const LoginContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
    } catch (error) {
      console.error('Registration error', error);
      alert('Unsuccessful Login. Please try again.');
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
