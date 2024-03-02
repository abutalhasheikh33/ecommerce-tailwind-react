// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgWfrbw0sXTeYBS_0zR7fbdjEr_kxcz88",
    authDomain: "my-first-project-ae523.firebaseapp.com",
    projectId: "my-first-project-ae523",
    storageBucket: "my-first-project-ae523.appspot.com",
    messagingSenderId: "1046465333314",
    appId: "1:1046465333314:web:d5e0ee4f211561033e85db",
    measurementId: "G-07W8G393R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const firestore = getFirestore(app); // Use 'app' instead of 'firebaseApp'
export { auth, provider, firestore };
