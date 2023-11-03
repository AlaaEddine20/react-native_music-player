import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
