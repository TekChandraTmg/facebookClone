import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
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
