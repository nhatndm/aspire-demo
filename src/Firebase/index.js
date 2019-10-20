import { firebaseApp } from "../Redux";
import { store } from "../Redux";
import { push } from "connected-react-router";
import "firebase/auth";

export async function createUserWithEmailPassword({ email, password }) {
  try {
    await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
    await firebaseApp.auth().currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT
    });
  } catch (error) {
    return alert("Please do that again");
  }
}

export async function loginWithEmailPassword({ email, password }) {
  try {
    await firebaseApp.auth().signInWithEmailAndPassword(email, password);
    const authUser = await firebaseApp.auth().currentUser;
    const idToken = await authUser.getIdToken(true);

    localStorage.setItem(
      "authuser",
      JSON.stringify({
        uid: authUser.uid,
        email: authUser.email,
        emailVerified: authUser.emailVerified,
        providerData: authUser.providerData,
        idToken: idToken
      })
    );

    store.dispatch(push("/"));
  } catch (error) {
    return alert("Please do that again");
  }
}

export async function verifyIdToken(idToken) {
  firebaseApp.auth().ve;
}
