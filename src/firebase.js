import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDWOOaSO7SD2rDxlW9EpqxZVOGfLVi-r58",
    authDomain: "stige-e8d28.firebaseapp.com",
    projectId: "stige-e8d28",
    storageBucket: "stige-e8d28.appspot.com",
    messagingSenderId: "798355209873",
    appId: "1:798355209873:web:50abe3cb2282131be30930",
    measurementId: "G-Q8XZ85RCTT"
  });

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };