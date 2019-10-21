import {
  saveLoans,
  fetchLoansApi,
  fetchLoanDetailApi,
  loanRePayment
} from "./action";

export default {
  state: {
    data: []
  },
  reducers: {
    saveLoans
  },
  effects: {
    fetchLoansApi,
    fetchLoanDetailApi,
    loanRePayment
  }
};
