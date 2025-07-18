// src/config/firebase.js (or similar)

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjS29fkPNtd10vxegk1QUk9uTApi7a9Q4",
  authDomain: "fooddeliveryapp-2df75.firebaseapp.com",
  projectId: "fooddeliveryapp-2df75",
  storageBucket: "fooddeliveryapp-2df75.appspot.com",
  messagingSenderId: "745439464159",
  appId: "fooddeliveryapp-2df75"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
