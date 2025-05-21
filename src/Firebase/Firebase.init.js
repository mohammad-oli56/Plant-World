// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgXFi77qmNPKjIU2BcRBl9G4pQ2AGQ3aw",
  authDomain: "assingment-10-9c374.firebaseapp.com",
  projectId: "assingment-10-9c374",
  storageBucket: "assingment-10-9c374.firebasestorage.app",
  messagingSenderId: "517815121208",
  appId: "1:517815121208:web:b2e811a91f99feff02fdcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);