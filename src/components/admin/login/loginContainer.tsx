import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import LoginForm from "./loginForm";
import { login } from "./appSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { LocationState } from "../../../interfaces/types";

const LoginContainer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from =
    (location.state as LocationState)?.from?.pathname || "/admin/dashboard";

  const handleLogin = async () => {
    if (!email) {
      alert("Email is required.");
      return;
    }
    if (!password) {
      alert("Password is required.");
      return;
    }

    setIsLoading(true);
    try {
      await dispatch(login({ email, password })).unwrap();
      alert("Login successful!");
      navigate(from);
    } catch (error) {
      alert(
        `Login failed: ${
          error instanceof Error ? error.message : "An unknown error occurred."
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      handleLogin={handleLogin}
      isLoading={isLoading}
    />
  );
};

export default LoginContainer;
