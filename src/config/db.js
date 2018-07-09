import Firebase from 'firebase'

// Inicializando Firebase
  var config = {
    apiKey: "AIzaSyC7SDwGWK-jhrDcRVB6xamo1AWLKq_jMqM",
    authDomain: "pomodoro-6bb7a.firebaseapp.com",
    databaseURL: "https://pomodoro-6bb7a.firebaseio.com",
    projectId: "pomodoro-6bb7a",
    storageBucket: "pomodoro-6bb7a.appspot.com",
    messagingSenderId: "404366955116"
  };

let app = Firebase.initializeApp(config);
export const db = app.database();
