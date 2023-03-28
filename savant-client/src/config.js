// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1WTm2Y-OqPUc7zJkxRjuQr9KZiMvsv_o",
  authDomain: "insightlypaper.firebaseapp.com",
  projectId: "insightlypaper",
  storageBucket: "insightlypaper.appspot.com",
  messagingSenderId: "3123628552",
  appId: "1:3123628552:web:1c1d3b86fcad4f963ddfbd",
  measurementId: "G-926EP1FZCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};

