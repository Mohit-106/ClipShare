import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'
import 'firebase/storage'
firebase.initializeApp({
  apiKey: "AIzaSyATw7sWaaFpyzh_rihFoC7EU3QmqlYXOko",
  authDomain: "reels-ee19f.firebaseapp.com",
  projectId: "reels-ee19f",
  storageBucket: "reels-ee19f.appspot.com",
  messagingSenderId: "56240202632",
  appId: "1:56240202632:web:7a87050ce6b848a53a903d",
  measurementId: "G-EY79ZY2QCP"
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


