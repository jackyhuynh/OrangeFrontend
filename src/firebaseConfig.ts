// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChQF2bWXOB5V9SKcIqK07MHaB4ie18_5M",
    authDomain: "orange-448ca.firebaseapp.com",
    projectId: "orange-448ca",
    storageBucket: "orange-448ca.appspot.com",
    messagingSenderId: "332390747905",
    appId: "1:332390747905:web:2125792a10d38797695500",
    measurementId: "G-9MLW8JJLB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export {auth};