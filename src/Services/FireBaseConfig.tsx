// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApcHMr7bB6mIPiZ1vTBQQ5L71kSfCGPwA",
  authDomain: "alien-airfoil-399915.firebaseapp.com",
  projectId: "alien-airfoil-399915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);