import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyBG29If9qcK9EqbZg3ZPQLVWSXwIJqRwjY",
  authDomain: "book-santa-ea685.firebaseapp.com",
  projectId: "book-santa-ea685",
  storageBucket: "book-santa-ea685.appspot.com",
  messagingSenderId: "244028264996",
  appId: "1:244028264996:web:1ee6cdca16bc99be8bfeb1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
