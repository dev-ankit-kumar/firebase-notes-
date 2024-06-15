// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARL0Ll0KxHhg2YvN0MIOGosg3k_UDj354",
  authDomain: "keep-clone-3971.firebaseapp.com",
  projectId: "keep-clone-3971",
  storageBucket: "keep-clone-3971.appspot.com",
  messagingSenderId: "816926995755",
  appId: "1:816926995755:web:e4f0bead81bd9a4d25816e",
  measurementId: "G-PRC5HWVFVB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);