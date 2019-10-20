import { saveLoans, fetchLoansApi, fetchLoanDetailApi } from "./action";

export default {
  state: {
    loans: []
  },
  reducers: {
    saveLoans
  },
  effects: {
    fetchLoansApi,
    fetchLoanDetailApi
  }
};
