import React, { Component } from "react";
import { Route } from "react-router-dom";
import { verifyIdToken } from "../../FirebaseIns";
import Loading from "../../Component/Loading";

const CheckingStatus = {
  PENDING: "PENDING",
  DONE: "DONE"
};

const withAuthentication = (Comp, needAuthentication) => {
  return class extends Component {
    state = {
      checkingApiStatus: CheckingStatus.PENDING
    };

    async componentDidMount() {
      if (needAuthentication) {
        const response = await verifyIdToken();

        if (!response.isAuthenticated) {
          return this.props.history.push("/auth/login");
        }

        this.setState({ checkingApiStatus: CheckingStatus.DONE });
      }
    }

    render() {
      if (!needAuthentication) {
        return <Comp {...this.props} />;
      }

      if (this.state.checkingApiStatus === CheckingStatus.PENDING) {
        return <Loading />;
      }

      return <Comp {...this.props} />;
    }
  };
};

export const Routes = ({ routes }) => {
  return routes.map(v => (
    <Route
      key={v.id}
      exact={v.exact}
      path={v.path}
      component={withAuthentication(v.component, v.needAuthentication)}
    />
  ));
};
