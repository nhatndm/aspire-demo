import React, { Component } from "react";
import SignUpComponent from "../../../Component/Pages/Authentication/Signup";
import { connect } from "react-redux";

class SignupContainer extends Component {
  handleSubmit = async user => {
    await this.props.createUserWithEmailPassword(user);
  };

  render() {
    return <SignUpComponent handleSubmit={this.handleSubmit} />;
  }
}

const mapDisPatchtoProps = ({ firebase: { createUserWithEmailPassword } }) => {
  return {
    createUserWithEmailPassword: user => createUserWithEmailPassword(user)
  };
};

export default connect(
  null,
  mapDisPatchtoProps
)(SignupContainer);
