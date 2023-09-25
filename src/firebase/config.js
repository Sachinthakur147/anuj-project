// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ31kVyAkw8BMfPhQEIiVCAsTLsZ8cog4",
  authDomain: "food-app-aa1e5.firebaseapp.com",
  projectId: "food-app-aa1e5",
  storageBucket: "food-app-aa1e5.appspot.com",
  messagingSenderId: "556154100617",
  appId: "1:556154100617:web:dfa2f319d2536387c29f58",
  measurementId: "G-TR6MKPFJ25",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
