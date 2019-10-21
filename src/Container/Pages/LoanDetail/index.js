import React, { Component } from "react";
import LoanDetailComponent from "../../../Component/Pages/LoanDetail";
import { connect } from "react-redux";

class LoanDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(object) {
    this.props.loanRePayment({
      id: object.itemId,
      body: {
        cost: object.amount
      }
    });
  }

  componentDidMount() {
    const idLoan = this.props.match.params.id;
    this.props.fetchLoanDetailApi(idLoan);
  }

  render() {
    const { loans } = this.props;
    return (
      <LoanDetailComponent datasource={loans} handleClick={this.handleClick} />
    );
  }
}

const mapStateToProps = rootState => {
  return {
    loans: rootState.loans.data
  };
};

const mapDispatchToProps = ({
  loans: { fetchLoanDetailApi, loanRePayment }
}) => {
  return {
    fetchLoanDetailApi: id => fetchLoanDetailApi(id),
    loanRePayment: data => loanRePayment(data)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanDetailContainer);
