import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZvvUO0S-CEy93IrUy7EDHoQA5m74zyjc",
  authDomain: "feedback-system-fd636.firebaseapp.com",
  projectId: "feedback-system-fd636",
  storageBucket: "feedback-system-fd636.appspot.com",
  messagingSenderId: "458621180468",
  appId: "1:458621180468:web:4d5f505a22bfc906e34861",
  measurementId: "G-0ZQREXX0WP"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
