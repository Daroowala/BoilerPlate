// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsOEIY6LVrr429_OwM_QmhJCjCTYyyER0",
  authDomain: "react-connect-with-firebase.firebaseapp.com",
  projectId: "react-connect-with-firebase",
  storageBucket: "react-connect-with-firebase.appspot.com", // Typo fixed
  messagingSenderId: "71672543666",
  appId: "1:71672543666:web:8a874f832130f2b4b08cab",
  measurementId: "G-KYPLF1YGLN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Firebase auth instance export
export default app;
