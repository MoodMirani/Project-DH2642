import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAz-PmJus3p1-JkkwjHniXXGCOGRCKcJdI",
    authDomain: "popify-dh2642.firebaseapp.com",
    projectId: "popify-dh2642",
    storageBucket: "popify-dh2642.appspot.com",
    messagingSenderId: "1082530079583",
    appId: "1:1082530079583:web:55bc14c921a60f52840cea",
    measurementId: "G-ZVQZ20ZBXF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const auth = firebase.auth;
  export const db = firebase.database;