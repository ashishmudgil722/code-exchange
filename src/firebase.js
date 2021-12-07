import firebase from 'firebase';
// import firebase from 'firebase/compat/app';
// import 'firebase/firestore';
// import * as firebase from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyDNMmBmyNZRXKIqpFq4_wd_AkWELgpgWdI",
    authDomain: "code-exchange-f7293.firebaseapp.com",
    projectId: "code-exchange-f7293",
    storageBucket: "code-exchange-f7293.appspot.com",
    messagingSenderId: "49965334584",
    appId: "1:49965334584:web:46f23f8c86810391e366cd",
    measurementId: "G-JHLN47TJ69"
  };
 
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore(); 

export {auth , provider};
export default db;
