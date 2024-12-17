import React from 'react';
import { Button, TextField, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import AutoCompleteInput from '../../shared/autoComplete/autoCompleteInput';

interface RegisterFormProps {
  serviceNu: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  company: string;
  branch: string;
  position: string;
  setserviceNu: (serviceNu: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setCompany: (company: string) => void;
  setBranch: (branch: string) => void;
  setPosition: (position: string) => void;
  handleRegister: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  serviceNu,
  email,
  password,
  firstName,
  lastName,
  company,
  branch,
  position,
  setserviceNu,
  setEmail,
  setPassword,
  setFirstName,
  setLastName,
  setCompany,
  setBranch,
  setPosition,
  handleRegister,
}) => {
  const companyOptions = ['Company A', 'Company B', 'Company C'];
  const branchOptions = ['Branch X', 'Branch Y', 'Branch Z'];
  const positionOptions = ['Manager', 'Developer', 'Designer'];

  return (
    <div className="register-container">
      <Container maxWidth="sm" className="register-form-container">
        <h1 className="h1-part">Register Here</h1>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          aria-label="First Name"
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          aria-label="Last Name"
        />
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
        <AutoCompleteInput
          label="Company"
          value={company}
          onChange={setCompany}
          options={companyOptions}
          required={true}
        />
        <AutoCompleteInput
          label="Branch"
          value={branch}
          onChange={setBranch}
          options={branchOptions}
          required={true}
        />
        <AutoCompleteInput
          label="Position"
          value={position}
          onChange={setPosition}
          options={positionOptions}
          required={true}
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
