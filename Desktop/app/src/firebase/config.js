import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCNxDXWOtTGCA8QNffj9MYeGMJdMBGV6vE",
    authDomain: "porvos-ef6a1.firebaseapp.com",
    databaseURL: "https://porvos-ef6a1.firebaseio.com",
    projectId: "porvos-ef6a1",
    storageBucket: "porvos-ef6a1.appspot.com",
    messagingSenderId: "1022782184157",
    appId: "1:1022782184157:web:9243bc9c362bdb5cf0d934"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };