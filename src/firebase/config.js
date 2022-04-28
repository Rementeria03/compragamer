// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkhhblHjNMI06sMaxOOiW5mMg6_KTSVTY",
  authDomain: "compragamer-702bc.firebaseapp.com",
  projectId: "compragamer-702bc",
  storageBucket: "compragamer-702bc.appspot.com",
  messagingSenderId: "352648400485",
  appId: "1:352648400485:web:57f1df37b681958edb408c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
