import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfVcy2ZXx8R35d64cNJV3w8R_z02gw55M",
    authDomain: "fir-dbb1f.firebaseapp.com",
    databaseURL: "https://fir-dbb1f.firebaseio.com",
    projectId: "fir-dbb1f",
    storageBucket: "fir-dbb1f.appspot.com",
    messagingSenderId: "1066495799164",
    appId: "1:1066495799164:web:4e7054ff7957340cb6fef9",
    measurementId: "G-R92HL3Z898"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };