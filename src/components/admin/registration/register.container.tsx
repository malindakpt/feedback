import React, { useState } from 'react';
import RegisterForm from './register';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../services/auth/firebase';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../services/auth/firebase'; // Import Firestore instance

const RegisterContainer: React.FC = () => {
  const [serviceNu, setServiceNu] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [branch, setBranch] = useState('');
  const [position, setPosition] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Get user ID from the created user
      const userId = userCredential.user.uid;

      // Save user information to Firestore
      const username = `${firstName} ${lastName}`;
      await addDoc(collection(db, "users"), {
        userId,
        username,
        email,
        company,
        branch,
        position,
        status: "pending", // Set initial status to pending
      });

      alert('Registration successful. Your account is under review.');
      navigate('/login');
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
      firstName={firstName}
      lastName={lastName}
      company={company}
      branch={branch}
      position={position}
      setserviceNu={setServiceNu}
      setEmail={setEmail}
      setPassword={setPassword}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setCompany={setCompany}
      setBranch={setBranch}
      setPosition={setPosition}
      handleRegister={handleRegister}
    />
  );
};

export default RegisterContainer;
