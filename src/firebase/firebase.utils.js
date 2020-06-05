import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBhk4sE-u60lCgogxaNAsGdagvhPDWGu8E",
  authDomain: "ecom-react-6fcbb.firebaseapp.com",
  databaseURL: "https://ecom-react-6fcbb.firebaseio.com",
  projectId: "ecom-react-6fcbb",
  storageBucket: "ecom-react-6fcbb.appspot.com",
  messagingSenderId: "113481491443",
  appId: "1:113481491443:web:564fca7bcc87941b10a886",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
