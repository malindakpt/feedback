import React from "react";
import "./login.scss"

interface LoginFormProps {
  email: string;
  password: string;
  error: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}) => {
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={onEmailChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={onPasswordChange} />
        </div>
        {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="register-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
