// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzjoVORKKuvpcfWvGdH0aA6EtHh4BFw6A",
  authDomain: "front-end-664f1.firebaseapp.com",
  projectId: "front-end-664f1",
  storageBucket: "front-end-664f1.appspot.com",
  messagingSenderId: "341939864080",
  appId: "1:341939864080:web:83136764200f2471fec095",
  measurementId: "G-V6D7LL1P5G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
