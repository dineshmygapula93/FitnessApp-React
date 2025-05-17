import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAohnQw5tI07aGl8_SlNqbQFZr5YssG7Lo",
  authDomain: "fitnessapp-d8ab4.firebaseapp.com",
  projectId: "fitnessapp-d8ab4",
  storageBucket: "fitnessapp-d8ab4.firebasestorage.app",
  messagingSenderId: "382860440730",
  appId: "1:382860440730:web:e5169a94e800a3fbd4db23",
  measurementId: "G-CDCK77BR91"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app);