import firebase from 'firebase'
require ('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyCaoHN47zog1SxUd5UQ6WTo5HBBGSTW_H8",
  authDomain: "book-santa-dc4fd.firebaseapp.com",
  databaseURL: "https://book-santa-dc4fd.firebaseio.com",
  projectId: "book-santa-dc4fd",
  storageBucket: "book-santa-dc4fd.appspot.com",
  messagingSenderId: "949633525925",
  appId: "1:949633525925:web:ad442f30273fa5b1cfc54c"
};
  firebase.initializeApp(firebaseConfig)
export default firebase.firestore()