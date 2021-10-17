// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2WCo7faHPvvcahbn06o_7DeI8GJrnSPU",
  authDomain: "databasesprojet.firebaseapp.com",
  projectId: "databasesprojet",
  storageBucket: "databasesprojet.appspot.com",
  messagingSenderId: "525087513544",
  appId: "1:525087513544:web:c77e75414e6c7cd1503efd",
  measurementId: "G-F79PVDFRJT"
};

// Initialize Firebase
globalThis.app = initializeApp(firebaseConfig);
globalThis.auth = getAuth();
globalThis.signInWithEmailAndPassword = signInWithEmailAndPassword;
globalThis.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
const analytics = getAnalytics(app);