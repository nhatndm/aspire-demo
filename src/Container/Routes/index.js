import React from "react";
import Authentication from "../Pages/Authentication";
import Home from "../Pages/Home";
import LoansDetail from "../Pages/LoanDetail";
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
      component: Authentication,
      needAuthentication: false
    },
    {
      id: "home",
      exact: true,
      path: "/",
      component: Home,
      needAuthentication: true
    },
    {
      id: "loans",
      exact: true,
      path: "/loans",
      component: Home,
      needAuthentication: true
    },
    {
      id: "loans-detail",
      exact: false,
      path: "/loans/:id",
      component: LoansDetail,
      needAuthentication: true
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
      component: Login,
      needAuthentication: false
    },
    {
      id: "login",
      exact: false,
      path: "/auth/login",
      component: Login,
      needAuthentication: false
    },
    {
      id: "signup",
      exact: false,
      path: "/auth/signup",
      component: SignupContainer,
      needAuthentication: false
    }
  ];

  return (
    <Switch>
      <Routes routes={routes} />;
    </Switch>
  );
};
