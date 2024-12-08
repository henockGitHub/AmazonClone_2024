import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBXRN4l8r7gtgfVdiWoAsGJZbpIUiym4M",
  authDomain: "clone-1cb13.firebaseapp.com",
  projectId: "clone-1cb13",
  storageBucket: "clone-1cb13.firebasestorage.app",
  messagingSenderId: "917597378556",
  appId: "1:917597378556:web:773d56452b38b4f3df8479",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
