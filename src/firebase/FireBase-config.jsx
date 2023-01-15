import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJpsp-XAXVY9_PxE0rThdaartdkmT9Atk",
  authDomain: "car-portal-e086d.firebaseapp.com",
  projectId: "car-portal-e086d",
  storageBucket: "car-portal-e086d.appspot.com",
  messagingSenderId: "461448215408",
  appId: "1:461448215408:web:41b72b42f29170763fedb5",
  measurementId: "G-EZX7FK6999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); 
export const provider = new GoogleAuthProvider();