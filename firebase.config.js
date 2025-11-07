// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRm8Gi-ILAL1kZ0BOPfEHchIhUP2EDV64",
  authDomain: "smartdeals-fbdb2.firebaseapp.com",
  projectId: "smartdeals-fbdb2",
  storageBucket: "smartdeals-fbdb2.firebasestorage.app",
  messagingSenderId: "443332238463",
  appId: "1:443332238463:web:2262574161ef409434334a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
