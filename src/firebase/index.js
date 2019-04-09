import firebase from 'firebase/app';
import 'firebase/storage';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyA53hOAq-K03XntomY1tuWiLSoJ3UJJ268",
    authDomain: "upload-files-firebase.firebaseapp.com",
    databaseURL: "https://upload-files-firebase.firebaseio.com",
    projectId: "upload-files-firebase",
    storageBucket: "upload-files-firebase.appspot.com",
    messagingSenderId: "224245398899"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }