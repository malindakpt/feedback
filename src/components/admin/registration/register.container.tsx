import React, { useState } from 'react';
import RegisterForm from './register';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../services/auth/firebase';
import { useNavigate } from 'react-router-dom';

const RegisterContainer: React.FC = () => {
  const [serviceNu, setServiceNu] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate from react-router-dom

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Registration error', error);
      alert('Unsuccessful registration. Please try again.');
    }
  };

  return (
    <RegisterForm
      serviceNu={serviceNu}
      email={email}
      password={password}
      setserviceNu={setServiceNu}
      setEmail={setEmail}
      setPassword={setPassword}
      handleRegister={handleRegister}
    />
  );
};

export default RegisterContainer;
