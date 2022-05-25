// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9QLVizoHjSMPGVWgJV001WAcS0VnHH_c",
    authDomain: "ts-manufacture-company.firebaseapp.com",
    projectId: "ts-manufacture-company",
    storageBucket: "ts-manufacture-company.appspot.com",
    messagingSenderId: "1091174219268",
    appId: "1:1091174219268:web:f494dc9243ac4da5ed7f51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;