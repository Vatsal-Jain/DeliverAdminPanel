// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjrtHkhuxWM4LOsiF9wv8atTXODL17npw",
  authDomain: "deliverapp1-ad3ea.firebaseapp.com",
  projectId: "deliverapp1-ad3ea",
  storageBucket: "deliverapp1-ad3ea.appspot.com",
  messagingSenderId: "1082855351100",
  appId: "1:1082855351100:web:e71d851f7457d0ed90f439"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage};