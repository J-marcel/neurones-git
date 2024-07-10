// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDROVi04ImblWlZXLf3mUIyrdIRZozOZXQ",
    authDomain: "neurones-tech.firebaseapp.com",
    projectId: "neurones-tech",
    storageBucket: "neurones-tech.appspot.com",
    messagingSenderId: "623163451261",
    appId: "1:623163451261:web:d0f045358e1467b3988e14",
    measurementId: "G-CTHY3GJJFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)