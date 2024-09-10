import React from 'react';
import { Button, TextField, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for navigation

interface RegisterFormProps {
  serviceNu: string;
  email: string;
  password: string;
  setserviceNu: (serviceNu: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleRegister: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  serviceNu,
  email,
  password,
  setserviceNu,
  setEmail,
  setPassword,
  handleRegister,
}) => {
  return (
    <div className="register-container">
      <Container maxWidth="sm" className="register-form-container">
        <h1 className="h1-part">Register Here</h1>
        <TextField
          label="Service Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={serviceNu}
          onChange={(e) => setserviceNu(e.target.value)}
          aria-label="Service Number"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegister}
          className="register-button"
        >
          Register
        </Button>
        <Link to="/login" className="login-link">
          Already have an account? Login here
        </Link>
      </Container>
    </div>
  );
};

export default RegisterForm;
