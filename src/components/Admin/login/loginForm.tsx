import React from 'react';
import { Button, TextField, Container } from '@mui/material';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: (username: string, password: string) => Promise<void>;
}

const LoginForm: React.FC<LoginFormProps> = ({ 
  email, 
  password, 
  setEmail, 
  setPassword, 
  handleLogin 
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password); // Call the handleLogin function passed as a prop
  };

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
          onClick={handleSubmit} 
          className="login-button"
        >
        Login
      </Button>
      <Link to="/admin/company-view">View Home Page</Link>
    </Container>
    </div>
  );
};

export default LoginForm;
