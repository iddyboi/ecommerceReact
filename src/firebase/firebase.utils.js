import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA50SjOrX667TEF4ep5gOIxoDYysZ_mz9Q",
  authDomain: "ecommerceapp-c4afa.firebaseapp.com",
  databaseURL: "https://ecommerceapp-c4afa.firebaseio.com",
  projectId: "ecommerceapp-c4afa",
  storageBucket: "ecommerceapp-c4afa.appspot.com",
  messagingSenderId: "722251362033",
  appId: "1:722251362033:web:62bb1d33390f6397d68350",
  measurementId: "G-Q47QL8WMCF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
