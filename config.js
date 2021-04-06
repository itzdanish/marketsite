import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCvwjQboE1ISmFH_FsOoqeMZdEWqNMks28",
    authDomain: "marketsite-d5219.firebaseapp.com",
    databaseURL: "https://marketsite-d5219-default-rtdb.firebaseio.com",
    projectId: "marketsite-d5219",
    storageBucket: "marketsite-d5219.appspot.com",
    messagingSenderId: "663468896763",
    appId: "1:663468896763:web:7f412726362060f88c9b5e",
    measurementId: "G-4E4L4590G5",
}
firebase.initializeApp(config);
export default firebase.firestore();

  