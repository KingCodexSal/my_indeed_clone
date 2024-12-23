// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYR2F5h86706j-Y0ui_AByDv-esKn5aTE",
  authDomain: "indeed-clone-432b1.firebaseapp.com",
  projectId: "indeed-clone-432b1",
  storageBucket: "indeed-clone-432b1.firebasestorage.app",
  messagingSenderId: "141665970819",
  appId: "1:141665970819:web:37983a26546f96569849b6",
  measurementId: "G-6RP5R3QELV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
//const analytics = getAnalytics(app);
