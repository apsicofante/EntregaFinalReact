// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPaxmWDaelHAdmmoPP_ih2YwaKwvWvghQ",
  authDomain: "cafeteria80s.firebaseapp.com",
  projectId: "cafeteria80s",
  storageBucket: "cafeteria80s.appspot.com",
  messagingSenderId: "484834593002",
  appId: "1:484834593002:web:557e6755f95243786d2f93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)