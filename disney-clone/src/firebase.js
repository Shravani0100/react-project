import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDxij8kiq-KtMfFm8Hm0eGHssXtT0kcJ-s",
    authDomain: "disney-clone-f7fe0.firebaseapp.com",
    projectId: "disney-clone-f7fe0",
    storageBucket: "disney-clone-f7fe0.appspot.com",
    messagingSenderId: "1068770626115",
    appId: "1:1068770626115:web:a21440222a5accc422a2f6",
    measurementId: "G-4ZDTHEPYDK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
