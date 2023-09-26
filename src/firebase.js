import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_AD7tR1Mcb-tjmLktsKFNw2_RsOHSAfM",
  authDomain: "ecommerce-app-bde0e.firebaseapp.com",
  projectId: "ecommerce-app-bde0e",
  storageBucket: "ecommerce-app-bde0e.appspot.com",
  messagingSenderId: "436522362004",
  appId: "1:436522362004:web:9074940987f5742b374081",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export { auth, provider, db };
