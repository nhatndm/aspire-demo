import React, { Component } from "react";
import "./index.scss";
import { HomeTable } from "../../Table";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ itemId, clientName }) {
    return this.props.handleClick({ itemId, clientName });
  }

  render() {
    const { datasource } = this.props;
    return (
      <div className="container home">
        <HomeTable
          tabelLabel={[
            "Amount",
            "Interest Rate",
            "Pay Type",
            "Approved At",
            "Months",
            "Client Name"
          ]}
          tableKeyBody={[
            "amount",
            "interestRate",
            "payType",
            "createdAt",
            "monthsOfLoans",
            "client"
          ]}
          tableValue={datasource}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
