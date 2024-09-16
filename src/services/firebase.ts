// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB1qxLQHZrf9SsJGf6sBjjD-X14DhfWtpA",
  authDomain: "feedback-ab151.firebaseapp.com",
  projectId: "feedback-ab151",
  storageBucket: "feedback-ab151.appspot.com",
  messagingSenderId: "804957054905",
  appId: "1:804957054905:web:d6c3e191cb0fe288207868",
  measurementId: "G-2MTRRNGSTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export default app
