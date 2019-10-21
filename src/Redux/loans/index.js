import {
  saveLoans,
  saveClient,
  saveError,
  fetchLoansApi,
  fetchLoanDetailApi,
  loanRePayment
} from "./action";

export default {
  state: {
    data: [],
    error: "",
    client: ""
  },
  reducers: {
    saveLoans,
    saveClient,
    saveError
  },
  effects: {
    fetchLoansApi,
    fetchLoanDetailApi,
    loanRePayment
  }
};
