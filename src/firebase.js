import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'
import 'firebase/storage'
firebase.initializeApp({
  apiKey: "AIzaSyDu7NaGhsK4HemW7nOTgC7rV9hhCJ1sA9c",
  authDomain: "insta-bec1d.firebaseapp.com",
  projectId: "insta-bec1d",
  storageBucket: "insta-bec1d.appspot.com",
  messagingSenderId: "675925663160",
  appId: "1:675925663160:web:813a71df0f768d367e834d",
  measurementId: "G-R6JW0ESFET"
})
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
  users: firestore.collection('users'),
  posts: firestore.collection('posts'),
  comments: firestore.collection('comments'),
  getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  }
}
// 1. get firebase storage 
export const storage = firebase.storage();
export default firebase;


