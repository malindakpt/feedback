import React from 'react';
import { TextField, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ email, password, setEmail, setPassword, handleLogin }) => {
  return (
    <Container maxWidth="sm" className="login-form-container">
      <h1>Login</h1>
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
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
