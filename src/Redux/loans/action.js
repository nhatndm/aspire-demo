import { store } from "../";
import { push } from "connected-react-router";
import axios from "axios";
import { find } from "lodash";

export function saveLoans(state, { data }) {
  return {
    ...state,
    data: data
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

  return this.saveLoans({ data: loans });
}

export async function loanRePayment({ id, body }, rootState) {
  const authuser = JSON.parse(localStorage.getItem("authuser"));

  if (!authuser || Object.keys(authuser).length === 0 || !authuser.idToken) {
    return store.dispatch(push("/auth/login"));
  }

  const loan = await axios({
    url: `${process.env.REACT_APP_BACKEND_API}/loans/repayment/${id}`,
    method: "PUT",
    data: body,
    headers: {
      "id-token": authuser.idToken
    }
  });

  const loansRootState = rootState.loans;

  const loanFound = find(loansRootState, v => v._id === loan._id);

  loanFound.status = loan.status;

  return this.saveLoans({ data: loansRootState });
}
