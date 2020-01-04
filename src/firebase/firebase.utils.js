import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBgQA7crrfWKqov752WNAkNMgQgW0ukjrA",
    authDomain: "crwn-db-cbb5b.firebaseapp.com",
    databaseURL: "https://crwn-db-cbb5b.firebaseio.com",
    projectId: "crwn-db-cbb5b",
    storageBucket: "crwn-db-cbb5b.appspot.com",
    messagingSenderId: "170163368813",
    appId: "1:170163368813:web:17f9d4aae890cea3572064"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;