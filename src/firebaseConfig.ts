import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyChQF2bWXOB5V9SKcIqK07MHaB4ie18_5M",
    authDomain: "orange-448ca.firebaseapp.com",
    projectId: "orange-448ca",
    storageBucket: "orange-448ca.appspot.com",
    messagingSenderId: "332390747905",
    appId: "1:332390747905:web:2125792a10d38797695500",
    measurementId: "G-9MLW8JJLB0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth};