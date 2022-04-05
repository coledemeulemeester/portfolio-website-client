// BOOTSTRAP CSS
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// FIREBASE INIT
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB67y9QozlxZnsHKat8hKWzPrm4J1a2lkg",
  authDomain: "portfolio-website-dc1b2.firebaseapp.com",
  projectId: "portfolio-website-dc1b2",
  storageBucket: "portfolio-website-dc1b2.appspot.com",
  messagingSenderId: "357503831174",
  appId: "1:357503831174:web:8e946dddabe6602af69507",
  measurementId: "G-4B3XYH17GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// NORMAL CODE
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

