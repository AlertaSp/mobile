// src/services/firebaseConfig.ts
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZkLKXg7h0L0q3suilxokDKRtuRyfMCko",
  authDomain: "alertasp-52a2c.firebaseapp.com",
  projectId: "alertasp-52a2c",
  storageBucket: "alertasp-52a2c.firebasestorage.app",
  messagingSenderId: "1038644978492",
  appId: "1:1038644978492:web:22ffb06bf9567d2670b439"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
