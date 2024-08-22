import React from 'react';
import { Button, TextField, Container } from '@mui/material';
import './login.scss';

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin
}) => {
  return (
    <div className="login-container">
    <Container maxWidth="sm" className="login-form-container">
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        type="password"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button 
          variant="contained" 
          color="primary" 
          onClick={handleLogin} 
          className="login-button"
        >
        Login
      </Button>
    </Container>
    </div>
  );
};

export default LoginForm;
