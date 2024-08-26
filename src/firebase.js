// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSK6_U3CXnqgyROzaDSDGNi5CHqkk89h0",
  authDomain: "web-vietdest.firebaseapp.com",
  projectId: "web-vietdest",
  storageBucket: "web-vietdest.appspot.com",
  messagingSenderId: "360494611701",
  appId: "1:360494611701:web:3a03473ab2fb538f9699bc",
  measurementId: "G-7M9KD7QSHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);