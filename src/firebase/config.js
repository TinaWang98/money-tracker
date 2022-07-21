import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBrfz9VuMOrWH5wF0Zq7Xqlb8bdfx8Eg1I",
    authDomain: "money-tracker-5065f.firebaseapp.com",
    projectId: "money-tracker-5065f",
    storageBucket: "money-tracker-5065f.appspot.com",
    messagingSenderId: "1081891935394",
    appId: "1:1081891935394:web:73c4f8f6150572d13f73fb"
  };


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth,timestamp }