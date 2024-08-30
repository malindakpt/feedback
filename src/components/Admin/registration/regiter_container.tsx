import React, { useState } from 'react';
import RegisterForm from './register_form';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../services/auth/firebase';
// import { useHistory } from 'react-router-dom';

const RegisterContainer: React.FC = () => {
  const [serviceNu, setserviceNu] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth,email, password);
      alert('Registration successful');
      // history.push('/login');
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
      setserviceNu={setserviceNu}
      setEmail={setEmail}
      setPassword={setPassword}
      handleRegister={handleRegister}
    />
  );
};

export default RegisterContainer;
