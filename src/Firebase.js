import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZvvUO0S-CEy93IrUy7EDHoQA5m74zyjc",
  authDomain: "feedback-system-fd636.firebaseapp.com",
  projectId: "feedback-system-fd636",
  storageBucket: "feedback-system-fd636.appspot.com",
  messagingSenderId: "458621180468",
  appId: "1:458621180468:web:4d5f505a22bfc906e34861",
  measurementId: "G-0ZQREXX0WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);