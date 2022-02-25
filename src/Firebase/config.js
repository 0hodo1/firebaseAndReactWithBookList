import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsPUnd0Gy3tmstNdZ-Q6Hro5SeNCx2FeA",
  authDomain: "modern-react-app-b5454.firebaseapp.com",
  projectId: "modern-react-app-b5454",
  storageBucket: "modern-react-app-b5454.appspot.com",
  messagingSenderId: "58268936893",
  appId: "1:58268936893:web:8f8bdd7214b47d34dee5d4",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
