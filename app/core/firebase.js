import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBM0-SY2SHlBbaHmN45rXfAipnoVnfAMq0",
  authDomain: "api-univa.firebaseapp.com",
  databaseURL: "https://api-univa.firebaseio.com",
  storageBucket: "api-univa.appspot.com",
  messagingSenderId: "376794095408"
};

firebase.initializeApp(config);

export default firebase;
