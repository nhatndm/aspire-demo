import { store } from "../";
import { push } from "connected-react-router";
import axios from "axios";

export function saveLoans(state, { data }) {
  return {
    ...state,
    data: data,
    error: ""
  };
}

export function saveError(state, { error }) {
  return {
    ...state,
    error: error
  };
}

export function saveClient(state, { client }) {
  return {
    ...state,
    client: client,
    error: ""
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

  return this.saveLoans({ data: loans });
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
  const client = data.data.client;
  this.saveClient({ client: client });

  return this.saveLoans({ data: loans });
}

export async function loanRePayment({ id, body }) {
  const authuser = JSON.parse(localStorage.getItem("authuser"));

  if (!authuser || Object.keys(authuser).length === 0 || !authuser.idToken) {
    return store.dispatch(push("/auth/login"));
  }

  try {
    const loanDetail = await axios({
      url: `${process.env.REACT_APP_BACKEND_API}/loans/${id}/repayment`,
      method: "PUT",
      data: body,
      headers: {
        "id-token": authuser.idToken
      }
    });

    const data = await axios({
      url: `${process.env.REACT_APP_BACKEND_API}/loans/${loanDetail.data.loan.loanId}`,
      method: "GET",
      headers: {
        "id-token": authuser.idToken
      }
    });

    const loans = data.data.loans;

    return this.saveLoans({ data: loans });
  } catch (error) {
    return this.saveError({ error: error.response.data.error });
  }
}
