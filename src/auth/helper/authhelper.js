import firebase from "firebase/app";
import "firebase/auth";
import { auth } from "../../services/firebase";

export const signup = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    googleSignInPopup(provider);
};

function googleSignInPopup(provider) {
    // [START auth_google_signin_popup]
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            if (typeof window) {
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        user: result.user,
                    })
                );
            }
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    // [END auth_google_signin_popup]
}


export const IsAuth = () => {
    if (typeof window) {
        const user = localStorage.getItem("user");
        return JSON.parse(user);
    }
    return null;
};

export const singout = () => {
    auth.signOut();
    if (typeof window) {
        const user = localStorage.removeItem("user");
    }
};