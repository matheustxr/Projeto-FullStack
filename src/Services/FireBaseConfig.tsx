// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApcHMr7bB6mIPiZ1vTBQQ5L71kSfCGPwA",
  authDomain: "alien-airfoil-399915.firebaseapp.com",
  projectId: "alien-airfoil-399915",
  storageBucket: "alien-airfoil-399915.appspot.com",
  messagingSenderId: "222235360809",
  appId: "1:222235360809:web:37d8bafbd060df2daf6638",
  measurementId: "G-FQPHP3PM68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);