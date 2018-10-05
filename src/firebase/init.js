import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBHdeNknC5o6wK0heaVGD_rfIWAC9sKl_8",
    authDomain: "awesome-chatbox.firebaseapp.com",
    databaseURL: "https://awesome-chatbox.firebaseio.com",
    projectId: "awesome-chatbox",
    storageBucket: "awesome-chatbox.appspot.com",
    messagingSenderId: "220844472328"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()
