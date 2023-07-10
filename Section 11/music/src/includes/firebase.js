import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnd1DAmb4sCHjicljwT-Z4fjdkJdb3vn8",
  authDomain: "music-6bb45.firebaseapp.com",
  projectId: "music-6bb45",
  storageBucket: "music-6bb45.appspot.com",
  appId: "1:710750631860:web:465d66d9dc5f1f74f6e4e1",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
