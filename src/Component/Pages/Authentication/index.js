import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { AuthenticationRoutes } from "../../../Container/Routes";
import "./index.scss";

export default class AuthenticationComponent extends Component {
  render() {
    const { path } = this.props;
    return (
      <div className="authentication-page">
        <div className="authentication-page-wrapper">
          <div className="switch-tab">
            <NavLink
              className="tab-item"
              to="/auth/login"
              activeClassName="active"
              isActive={match => {
                return match || path === "/auth";
              }}
            >
              sign in
            </NavLink>
            <NavLink
              className="tab-item"
              to="/auth/signup"
              activeClassName="active"
            >
              register now
            </NavLink>
          </div>

          <div className="content">
            <AuthenticationRoutes />
          </div>
        </div>
      </div>
    );
  }
}
