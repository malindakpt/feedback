// RegisterForm.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";

interface RegisterFormProps {
  name: string;
  email: string;
  password: string;
  error: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  name,
  email,
  password,
  error,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}) => (
  <div className="register-container">
    <h2 className="register-title">Create an Account</h2>
    <form onSubmit={onSubmit} className="register-form">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          required
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className="register-button">Register</button>
    </form>
    <p className="login-link">
      Already have an account? <Link to="/login">Login here</Link>
    </p>
  </div>
);

export default RegisterForm;
