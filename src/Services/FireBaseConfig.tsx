import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAhC7qUdPROg5wlkuolLt45S_fRh6p9QM8",
  authDomain: "teste2-35f55.firebaseapp.com",
  projectId: "teste2-35f55",
  storageBucket: "teste2-35f55.appspot.com",
  messagingSenderId: "457045941026",
  appId: "1:457045941026:web:234bcf4f878c547bb3e37b",
  measurementId: "G-36L0KT2C97"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {firestore, storage, auth};