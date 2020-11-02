import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA3AQ9U0vizgL_KtzZSp7Zy-NRUz58DZxs",
    authDomain: "smartbrain-22516.firebaseapp.com",
    databaseURL: "https://smartbrain-22516.firebaseio.com",
    projectId: "smartbrain-22516",
    storageBucket: "smartbrain-22516.appspot.com",
    messagingSenderId: "1047269002952",
    appId: "1:1047269002952:web:c03ffd2335e69888059ffd",
    measurementId: "G-PLDMFPF1ZM"
};


export const createProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}





firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;