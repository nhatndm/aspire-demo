import React, { Component } from "react";
import LoanDetailComponent from "Component/Pages/LoanDetail";
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
    const { loans, error, client } = this.props;
    return (
      <LoanDetailComponent
        datasource={loans}
        handleClick={this.handleClick}
        error={error}
        client={client}
      />
    );
  }
}

const mapStateToProps = rootState => {
  return {
    loans: rootState.loans.data,
    error: rootState.loans.error,
    client: rootState.loans.client
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
