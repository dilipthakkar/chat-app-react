import firebase from "firebase/app";
import "firebase/auth";

import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA9TkvdjLY6UJZu4bPjttXJKc0-NcM6FMw",
    authDomain: "chat-app-react-6d318.firebaseapp.com",
    projectId: "chat-app-react-6d318",
    storageBucket: "chat-app-react-6d318.appspot.com",
    messagingSenderId: "597526267269",
    appId: "1:597526267269:web:075149100c1e26aafd70ec",
    measurementId: "G-F00DFRZ1VF",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const DB = app.firestore();