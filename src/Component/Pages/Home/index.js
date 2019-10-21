import React, { Component } from "react";
import "./index.scss";
import { HomeTable } from "Component/Table";

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ itemId }) {
    return this.props.handleClick({ itemId });
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
