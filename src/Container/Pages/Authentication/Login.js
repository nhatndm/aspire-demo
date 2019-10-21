import React, { Component } from "react";
import LoginComponent from "../../../Component/Pages/Authentication/Login";
import { connect } from "react-redux";
import { loginWithEmailPassword } from "../../../FirebaseIns";

class LoginContainer extends Component {
  handleSubmit = async user => {
    await loginWithEmailPassword(user);
  };

  render() {
    return <LoginComponent handleSubmit={this.handleSubmit} />;
  }
}

export default connect(
  null,
  null
)(LoginContainer);
