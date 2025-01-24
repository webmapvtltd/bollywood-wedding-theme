// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCusQISxDzNZ85JZG6pC2_4cGPgqvtQME0",
  authDomain: "bollywoodtheme-c4302.firebaseapp.com",
  projectId: "bollywoodtheme-c4302",
  storageBucket: "bollywoodtheme-c4302.firebasestorage.app",
  messagingSenderId: "806446856124",
  appId: "1:806446856124:web:5b777a9fbaa38d63399db9",
  measurementId: "G-3RE5KCG3RE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export default app;