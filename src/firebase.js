import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAmW9sq_hibBy5-eaMuVsHvOh4BDjocxbM",
  authDomain: "facebookclone-56327.firebaseapp.com",
  projectId: "facebookclone-56327",
  storageBucket: "facebookclone-56327.appspot.com",
  messagingSenderId: "653072196152",
  appId: "1:653072196152:web:3f145b2f98e562cf03bccd",
};
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.fireStore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const firestore = firebase.firestore();

export { auth, provider, firestore };
export default firebaseApp;
