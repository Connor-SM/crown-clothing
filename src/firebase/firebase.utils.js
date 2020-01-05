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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;