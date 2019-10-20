import React from "react";
import { Route } from "react-router-dom";

export const Routes = ({ routes }) => {
  return routes.map(v => (
    <Route key={v.id} exact={v.exact} path={v.path} component={v.component} />
  ));
};
