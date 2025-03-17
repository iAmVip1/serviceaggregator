// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "serviceaggregator-bc68b.firebaseapp.com",
  projectId: "serviceaggregator-bc68b",
  storageBucket: "serviceaggregator-bc68b.firebasestorage.app",
  messagingSenderId: "945262166555",
  appId: "1:945262166555:web:5c9063d0ceddc4df232ebe",
  measurementId: "G-FW2HZZ5ZYD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);