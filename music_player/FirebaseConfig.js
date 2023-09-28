import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCgEe4MUY975bKS1rzj3nkmmemxtNM8zAc",
  authDomain: "music-app-5d6e8.firebaseapp.com",
  projectId: "music-app-5d6e8",
  storageBucket: "music-app-5d6e8.appspot.com",
  messagingSenderId: "742693461160",
  appId: "1:742693461160:web:a071d1e388982089ea369d",
  measurementId: "G-E0LX54H4WQ",
};

// Initialize Firebase
export const FRIEBASE_APP = initializeApp(firebaseConfig);
export const FRIEBASE_AUTH = getAuth(FRIEBASE_APP);
