// RegisterContainer.tsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "./auth/firebase";
import { auth,db} from "../../services/auth/firebase";
import { setDoc, doc } from "firebase/firestore";
import RegisterForm from "./registerform";

const RegisterContainer: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          name: name,
          email: user.email,
          password: password,
        });
      }
      console.log("User Registered Successfully");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <RegisterForm
      name={name}
      email={email}
      password={password}
      error={error}
      onNameChange={(e) => setName(e.target.value)}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onSubmit={handleRegister}
    />
  );
};

export default RegisterContainer;
