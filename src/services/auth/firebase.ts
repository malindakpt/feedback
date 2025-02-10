import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDT4D4W0_hVexqyDlIl72cxzmQiHx7Ji5o",
  authDomain: "feedback-dda9e.firebaseapp.com",
  projectId: "feedback-dda9e",
  storageBucket: "feedback-dda9e.appspot.com",
  messagingSenderId: "378564796996",
  appId: "1:378564796996:web:b8a75938cbc36142201211",
  measurementId: "G-44HB3K93YZ"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
