import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAk3QM4L5bGz6yANb3WATwWbS7uWOuiBIw",
  authDomain: "twitter-clone-349ee.firebaseapp.com",
  databaseURL: "https://twitter-clone-1faac.firebaseio.com",
  projectId: "twitter-clone-349ee",
  storageBucket: "twitter-clone-349ee.appspot.com",
  messagingSenderId: "141939492921",
  appId: "1:141939492921:web:0bc1e36571ebf9ba91a5e8",
  measurementId: "G-HGFP2LDXP9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
