// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr5LjKi4lXajLT0qr8coqP-ArSI8Gamko",
  authDomain: "marmitesse.firebaseapp.com",
  projectId: "marmitesse",
  storageBucket: "marmitesse.appspot.com",
  messagingSenderId: "269764230382",
  appId: "1:269764230382:web:2767245f0ef50a9a18c7ff",
  measurementId: "G-BS9GTLJ646"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
export { db };
export const auth = getAuth(app);