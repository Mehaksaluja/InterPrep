// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1snRwmqmrrQYbcWdc0LJ0JIzy4jrwaEc",
  authDomain: "interprep-d00db.firebaseapp.com",
  projectId: "interprep-d00db",
  storageBucket: "interprep-d00db.firebasestorage.app",
  messagingSenderId: "1006083600787",
  appId: "1:1006083600787:web:2135db9867956114753866",
  measurementId: "G-HWS5LL7C91",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
