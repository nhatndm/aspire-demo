import React from "react";
import Authentication from "../Pages/Authentication";
import Login from "../Pages/Authentication/Login";
import SignupContainer from "../Pages/Authentication/Signup";
import { Routes } from "../../Component/Routes";
import { Switch } from "react-router-dom";

export const AppRoutes = () => {
  const routes = [
    {
      id: "authentication",
      exact: false,
      path: "/auth",
      component: Authentication
    }
  ];

  return (
    <Switch>
      <Routes routes={routes} />;
    </Switch>
  );
};

export const AuthenticationRoutes = () => {
  const routes = [
    {
      id: "authentication-home",
      exact: true,
      path: "/auth",
      component: Login
    },
    {
      id: "login",
      exact: false,
      path: "/auth/login",
      component: Login
    },
    {
      id: "signup",
      exact: false,
      path: "/auth/signup",
      component: SignupContainer
    }
  ];

  return (
    <Switch>
      <Routes routes={routes} />;
    </Switch>
  );
};
