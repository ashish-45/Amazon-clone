import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCWmj37IvwPmF0FjB0l84P7pH-tnZQLR6U",
    authDomain: "clone-e85fb.firebaseapp.com",
    databaseURL: "https://clone-e85fb.firebaseio.com",
    projectId: "clone-e85fb",
    storageBucket: "clone-e85fb.appspot.com",
    messagingSenderId: "395983247693",
    appId: "1:395983247693:web:363f516f7282bfb6f77f04"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };