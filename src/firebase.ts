// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD5aYlGNxYpq8Ds1ynnfkt9WkWlCT--gE",
  authDomain: "nwitter-reloaded-af56e.firebaseapp.com",
  projectId: "nwitter-reloaded-af56e",
  storageBucket: "nwitter-reloaded-af56e.appspot.com",
  messagingSenderId: "563430647945",
  appId: "1:563430647945:web:29cf5660bed447bd52be58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);