import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/auth/firebase";
import LoginForm from "./loginform";

const LoginContainer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
//   const history = useHistory();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login Successful");
        alert("Login successful");
        // Redirect to dashboard or home page after successful login
      } catch (err: any) {
        setError(err.message);
      }
  };

  return (
    <LoginForm
      email={email}
      password={password}
      error={error}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;