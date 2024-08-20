import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDygokVeYePTXlT8_1m1wN0oCrmFmVcM6A",
  authDomain: "feedback-new-dc155.firebaseapp.com",
  projectId: "feedback-new-dc155",
  storageBucket: "feedback-new-dc155.appspot.com",
  messagingSenderId: "659064785337",
  appId: "1:659064785337:web:568e368bd7107f05ab8e68",
  measurementId: "G-6G79124HPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);