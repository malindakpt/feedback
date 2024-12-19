import React from 'react';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../../services/auth/firebase';
import ForgotPassword from './forgotPassword';

const ForgotPasswordContainer: React.FC = () => {
  const navigate = useNavigate();

  const handlePasswordReset = async (email: string) => {
    try {
      // Send password reset email
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent! Please check your inbox.');

      // Log the reset request to Firestore
      const resetRequestsCollection = collection(db, 'passwordResetRequests');
      await addDoc(resetRequestsCollection, {
        email,
        requestedAt: serverTimestamp(),
      });

      // Navigate back to login page
      navigate('/login');
    } catch (error) {
      console.error('Error sending password reset email:', error);
      alert('Failed to send password reset email. Please try again.');
    }
  };

  return <ForgotPassword onResetPassword={handlePasswordReset} />;
};

export default ForgotPasswordContainer;
