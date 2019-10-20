import React, { Component } from "react";
import LoginComponent from "../../../Component/Pages/Authentication/Login";
import { connect } from "react-redux";

class LoginContainer extends Component {
  handleSubmit = async user => {
    await this.props.loginWithEmailPassword(user);
  };

  render() {
    return <LoginComponent handleSubmit={this.handleSubmit} />;
  }
}

const mapDisPatchtoProps = ({ firebase: { loginWithEmailPassword } }) => {
  return {
    loginWithEmailPassword: user => loginWithEmailPassword(user)
  };
};

export default connect(
  null,
  mapDisPatchtoProps
)(LoginContainer);
