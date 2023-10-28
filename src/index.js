import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD5HM8BRcNRAXovr-dyXwVUivLlg-F5U8s",
//   authDomain: "e-commerce-cafeteria80s.firebaseapp.com",
//   projectId: "e-commerce-cafeteria80s",
//   storageBucket: "e-commerce-cafeteria80s.appspot.com",
//   messagingSenderId: "631325775209",
//   appId: "1:631325775209:web:20a67b23fb6ff139b359f8"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
