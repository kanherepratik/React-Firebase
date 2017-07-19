import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyANqLpA7E1L4k8FUw6uzBvbChCv0XBKsGY",
    authDomain: "ci-league.firebaseapp.com",
    databaseURL: "https://ci-league.firebaseio.com",
    projectId: "ci-league",
    storageBucket: "ci-league.appspot.com",
    messagingSenderId: "447157911345"
  };
  var fire = firebase.initializeApp(config);

  export default fire;