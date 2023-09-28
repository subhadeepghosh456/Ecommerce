// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUmn7X2o7kX3JUTs-tVRrbVfrqBsqwmrE",
  authDomain: "ecommerce-f7bf9.firebaseapp.com",
  projectId: "ecommerce-f7bf9",
  storageBucket: "ecommerce-f7bf9.appspot.com",
  messagingSenderId: "769252217275",
  appId: "1:769252217275:web:0cb1e7d7824609204bf49e",
  measurementId: "G-MFPZLB4HMJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
