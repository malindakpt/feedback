import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANQgqruX24y7QdYBwUQNjfGgJ2kYgu_LE",
  authDomain: "feedback-60b9d.firebaseapp.com",
  projectId: "feedback-60b9d",
  storageBucket: "feedback-60b9d.appspot.com",
  messagingSenderId: "795367922413",
  appId: "1:795367922413:web:ca7ebaca938b8ca06e8ae4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
