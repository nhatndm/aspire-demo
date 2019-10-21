import { store, firebaseApp } from "../Redux";
import { push } from "connected-react-router";
import axios from "axios";
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
    const idToken = await authUser.getIdToken();

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

export async function verifyIdToken() {
  const authuser = JSON.parse(localStorage.getItem("authuser"));

  if (!authuser || Object.keys(authuser).length === 0 || !authuser.idToken) {
    return {
      isAuthenticated: false
    };
  }

  try {
    await axios({
      url: `${process.env.REACT_APP_BACKEND_API}/auth/verify`,
      method: "GET",
      headers: {
        "id-token": authuser.idToken
      }
    });

    return {
      isAuthenticated: true
    };
  } catch (error) {
    return {
      isAuthenticated: false
    };
  }
}
