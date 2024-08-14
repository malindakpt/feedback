import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtGYDcWvAjSQIDX2CP76CF-vL9umLeHFw",
  authDomain: "feedback-1-66f9f.firebaseapp.com",
  projectId: "feedback-1-66f9f",
  storageBucket: "feedback-1-66f9f.appspot.com",
  messagingSenderId: "573605604137",
  appId: "1:573605604137:web:e91ad3002796aaa859e538",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
