import firebase from '@firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';
import 'firebase/storage';

require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyBqmTAOuHX76dxPdUr8w_VtI-x7aVRG5EE",
    authDomain: "vuecommerce-230816.firebaseapp.com",
    databaseURL: "https://vuecommerce-230816.firebaseio.com",
    projectId: "vuecommerce-230816",
    storageBucket: "vuecommerce-230816.appspot.com",
    messagingSenderId: "477503345192",
    appId: "1:477503345192:web:8a7091d9528e68245f9b1d",
    measurementId: "G-E89F3X5SWY"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {fb,db}
// firebase.analytics();