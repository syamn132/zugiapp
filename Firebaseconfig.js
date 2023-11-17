import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB17KZUs6SztzT2QUC1jV2PN8kvsEy9v_0",
  authDomain: "zugi-innovious.firebaseapp.com",
  projectId: "zugi-innovious",
  storageBucket: "zugi-innovious.appspot.com",
  messagingSenderId: "854662803150",
  appId: "1:854662803150:web:19b0ad04563dee4d046a9f"
};

const app = initializeApp(firebaseConfig);
 const authentication = getAuth(app);
 const database = getFirestore();

 export {authentication,database}