import { store } from "../";
import { push } from "connected-react-router";
import axios from "axios";

export function saveLoans(state, { loans }) {
  return {
    ...state,
    loans: loans
  };
}

export async function fetchLoansApi() {
  const authuser = JSON.parse(localStorage.getItem("authuser"));

  if (!authuser || Object.keys(authuser).length === 0 || !authuser.idToken) {
    return store.dispatch(push("/auth/login"));
  }

  const data = await axios({
    url: `${process.env.REACT_APP_BACKEND_API}/loans`,
    method: "GET",
    headers: {
      "id-token": authuser.idToken
    }
  });

  const loans = data.data.loans;

  return this.saveLoans(loans);
}

export async function fetchLoanDetailApi(id) {
  const authuser = JSON.parse(localStorage.getItem("authuser"));

  if (!authuser || Object.keys(authuser).length === 0 || !authuser.idToken) {
    return store.dispatch(push("/auth/login"));
  }

  const data = await axios({
    url: `${process.env.REACT_APP_BACKEND_API}/loans/${id}`,
    method: "GET",
    headers: {
      "id-token": authuser.idToken
    }
  });

  const loans = data.data.loans;

  return this.saveLoans(loans);
}

export async function loanRePayment(id, body) {
  const authuser = JSON.parse(localStorage.getItem("authuser"));

  if (!authuser || Object.keys(authuser).length === 0 || !authuser.idToken) {
    return store.dispatch(push("/auth/login"));
  }

  await axios({
    url: `${process.env.REACT_APP_BACKEND_API}/loans/${id}`,
    method: "PUT",
    data: body,
    headers: {
      "id-token": authuser.idToken
    }
  });

  const data = await axios({
    url: `${process.env.REACT_APP_BACKEND_API}/loans/${id}`,
    method: "GET",
    headers: {
      "id-token": authuser.idToken
    }
  });

  const loans = data.data.loans;

  return this.saveLoans(loans);
}
