import firebase, { firestore } from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDjjeMeHsYOdTp_wArOk1YDU0vvIqBgslo",
    authDomain: "myfacebclone.firebaseapp.com",
    projectId: "myfacebclone",
    storageBucket: "myfacebclone.appspot.com",
    messagingSenderId: "140433557597",
    appId: "1:140433557597:web:07391baf2c81a150cee5b4",
    measurementId: "G-KM4KDJYNJS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
