import React, { Component } from "react";
import "./index.scss";
import { LoansTable } from "../../Table";

export default class LoanDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(object) {
    return this.props.handleClick(object);
  }

  render() {
    const { datasource } = this.props;
    return (
      <div className="container loan-detail">
        <LoansTable
          tabelLabel={[
            "Pricipal",
            "Interest Payment",
            "Date Of Repayment",
            "Status"
          ]}
          tableKeyBody={[
            "principal",
            "interestPayment",
            "dateOfPayment",
            "status"
          ]}
          tableValue={datasource}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
