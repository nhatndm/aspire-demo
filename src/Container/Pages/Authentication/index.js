import React, { Component } from "react";
import AuthenticationComponent from "../../../Component/Pages/Authentication";
import { AuthenticationRoutes } from "../../Routes";

export default class AuthenticationContainer extends Component {
  render() {
    const { location } = this.props;
    return (
      <AuthenticationComponent path={location.pathname}>
        <AuthenticationRoutes />
      </AuthenticationComponent>
    );
  }
}
