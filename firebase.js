// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAakvHSXFHPNh_uKrfeek34TOKJcG6YMq8",
  authDomain: "paw-petsitting.firebaseapp.com",
  projectId: "paw-petsitting",
  storageBucket: "paw-petsitting.appspot.com",
  messagingSenderId: "818217220913",
  appId: "1:818217220913:web:fe09de0ec3c6819a5fce10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);  
