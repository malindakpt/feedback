import React from "react";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import TextInput from "../../shared/textInput/textInput";

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: () => void;
  isLoading?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
  isLoading = false,
}) => {
  return (
    <Container maxWidth="sm" className="login-form-container">
      <h1>Login</h1>
      <TextInput
        label="Email"
        value={email}
        onChange={setEmail}
        type="email"
        required
        validateInput={(value) => (!value ? "Email is required" : "")}
      />
      <TextInput
        label="Password"
        value={password}
        onChange={setPassword}
        type="password"
        required
        validateInput={(value) => (!value ? "Password is required" : "")}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        disabled={isLoading}
        sx={{ marginTop: 2 }}
      >
        Login
      </Button>
      <p style={{ marginTop: 16 }}>
        Don&apos;t have an account?{" "}
        <Link
          to="/admin/register"
          style={{ textDecoration: "none", color: "#1976d2" }}
        >
          Register here
        </Link>
        .
      </p>
    </Container>
  );
};

export default LoginForm;
