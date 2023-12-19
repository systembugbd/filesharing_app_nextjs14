// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeEY393d2mQ3gs2ttXlj9ISsEvhBjxZ_k",
  authDomain: "file-sharing-app-a497c.firebaseapp.com",
  projectId: "file-sharing-app-a497c",
  storageBucket: "file-sharing-app-a497c.appspot.com",
  messagingSenderId: "138227221112",
  appId: "1:138227221112:web:23d9ad20d70115ca73e38d",
  measurementId: "G-P4MZ0YX9TD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
