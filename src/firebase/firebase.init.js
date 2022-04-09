// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYO2JLREJZ82gi2OpQnpy79KOXbvUduso",
    authDomain: "private-route-b484e.firebaseapp.com",
    projectId: "private-route-b484e",
    storageBucket: "private-route-b484e.appspot.com",
    messagingSenderId: "736816529164",
    appId: "1:736816529164:web:1e8530bbdc101739641329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;