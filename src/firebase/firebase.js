import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBkXzLvXcUbGFDMEsY5O4s56gOcYADWKrs",
    authDomain: "react-costexplorer.firebaseapp.com",
    databaseURL: "https://react-costexplorer.firebaseio.com",
    projectId: "react-costexplorer",
    storageBucket: "react-costexplorer.appspot.com",
    messagingSenderId: "994872256184"
  };

  firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

 