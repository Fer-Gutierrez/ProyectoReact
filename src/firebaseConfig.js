// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP9AtB8MMoNPc5e6_yMjfxNG6r9XBqCSM",
  authDomain: "universo-astral.firebaseapp.com",
  projectId: "universo-astral",
  storageBucket: "universo-astral.appspot.com",
  messagingSenderId: "270669982733",
  appId: "1:270669982733:web:b7c8a30e8fa0e1dd207944",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
