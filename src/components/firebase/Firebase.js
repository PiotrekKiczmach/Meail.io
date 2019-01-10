import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyDXNni1Dc6n5c0cX06Eo0xns_xfTesIU0c",
    authDomain: "mealio-bb051.firebaseapp.com",
    databaseURL: "https://mealio-bb051.firebaseio.com",
    projectId: "mealio-bb051",
    storageBucket: "mealio-bb051.appspot.com",
    messagingSenderId: "55577707056"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

firebase.firestore()
  .enablePersistence()
  .then(() => {
    firebase.firestore();
  })
  .catch(err => console.log(err));

export default firebase