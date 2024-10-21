import React from 'react';

import { Button , Container } from '@mui/material';
import { Link } from 'react-router-dom';
import TextInput from '../../Shared/TextInput';

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ email, password,setEmail, setPassword,  handleLogin }) => {
  
  //Validation Logic
  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validatePassword = (password: string): string => {
    if (!password) return 'Password is required'
    return '';
  }
  
 
 

  return (
    <Container maxWidth="sm" className="login-form-container">
      <h1>Login</h1>
      
      {/* <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        onBlur={handleEmailBlur}
        error={Boolean(emailError)}
        helperText={emailError }
        
      /> */}

      <TextInput
        label='Email'
        value={email}
        onChange={setEmail}
        required
        validateInput={validateEmail}

      
      />

      <TextInput
        label="Password"
        value={password}
        onChange={setPassword}
        type='password'
        required
        validateInput={validatePassword}
        

      
      />
      
        
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
      >
        Login
      </Button>
      <p>
        Don&apos;t have an account?{' '}
        <Link to="/admin/register">Register here</Link>.
      </p>
    </Container>
  );
};

export default LoginForm;