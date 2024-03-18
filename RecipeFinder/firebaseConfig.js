// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8vHecG7xvyZsHzEE8AEhttGDVYqnblbo",
  authDomain: "food-recipe-db-e8c19.firebaseapp.com",
  projectId: "food-recipe-db-e8c19",
  storageBucket: "food-recipe-db-e8c19.appspot.com",
  messagingSenderId: "41378193882",
  appId: "1:41378193882:web:081ad8cb5c168c7f0b20e3",
  measurementId: "G-GDR01EGTRB"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
