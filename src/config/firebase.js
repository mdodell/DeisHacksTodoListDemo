// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_uGJsrAE26me-wDjYSJ-LYvp7SFvM750",
  authDomain: "deishacks-demo.firebaseapp.com",
  projectId: "deishacks-demo",
  storageBucket: "deishacks-demo.appspot.com",
  messagingSenderId: "205579757164",
  appId: "1:205579757164:web:e3fbb7d7add8e6fdbdda49",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firestore = getFirestore(app);
