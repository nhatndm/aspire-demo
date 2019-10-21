import React, { Component } from "react";
import AuthenticationComponent from "Component/Pages/Authentication";

export default class AuthenticationContainer extends Component {
  render() {
    const { location } = this.props;
    return <AuthenticationComponent path={location.pathname} />;
  }
}
