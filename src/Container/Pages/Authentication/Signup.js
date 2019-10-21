import React, { Component } from "react";
import SignUpComponent from "Component/Pages/Authentication/Signup";
import { connect } from "react-redux";
import { createUserWithEmailPassword } from "FirebaseIns";

class SignupContainer extends Component {
  handleSubmit = async user => {
    createUserWithEmailPassword(user);
  };

  render() {
    return <SignUpComponent handleSubmit={this.handleSubmit} />;
  }
}

export default connect(
  null,
  null
)(SignupContainer);
