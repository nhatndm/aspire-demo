import React, { Component } from "react";
import HomeComponent from "../../../Component/Pages/Home";
import { connect } from "react-redux";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ itemId }) {
    const { history } = this.props;
    return history.push(`/loans/${itemId}`);
  }

  componentDidMount() {
    this.props.fetchLoansApi();
  }

  render() {
    const { loans } = this.props;
    return <HomeComponent datasource={loans} handleClick={this.handleClick} />;
  }
}

const mapStateToProps = rootState => {
  return {
    loans: rootState.loans.data
  };
};

const mapDispatchToProps = ({ loans: { fetchLoansApi } }) => {
  return {
    fetchLoansApi: () => fetchLoansApi()
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
