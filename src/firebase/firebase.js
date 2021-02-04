import * as firebase from "firebase";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// this is the code that we use to connect to firebase
const firebaseConfigDevelopmentApp = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app =  firebase.initializeApp(firebaseConfigDevelopmentApp);
const database = firebase.database();
const auth = app.auth();

export { firebase, app, database, auth };




