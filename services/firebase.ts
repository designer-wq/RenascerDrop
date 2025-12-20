// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhW93Lk-CE9ANtTJ3l5Qj2SRPA0dYqUEQ",
    authDomain: "renascer-drops.firebaseapp.com",
    projectId: "renascer-drops",
    storageBucket: "renascer-drops.firebasestorage.app",
    messagingSenderId: "308350905578",
    appId: "1:308350905578:web:f684a5f9859f7444ba7b93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
