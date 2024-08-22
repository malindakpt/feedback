import React from 'react';
import { Button, TextField, Container, Link } from '@mui/material';
import './register.scss';

interface RegisterFormProps {
  serviceNu: string;
  email: string;
  password: string;
  setserviceNu: (serviceNu:string) => void;
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
  handleRegister
}) => {
  return (
    <div className="register-container">
    <Container maxWidth="sm" className="register-form-container">
      <h1 className='h1-part'>Register Here</h1>
    <TextField
        label="Service Nu"
        variant="outlined"
        fullWidth
        margin="normal"
        value={serviceNu}
        onChange={(e) => setserviceNu(e.target.value)}
      />
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
          onClick={handleRegister} 
          className="register-button"
        >
        Register
      </Button>
      <Link href="/login" variant="body2">
        Already have an account? Login here
      </Link>
    </Container>
    </div>
  );
};

export default RegisterForm;
