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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firestore;