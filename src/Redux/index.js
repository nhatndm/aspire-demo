import { init } from "@rematch/core";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

const historyIns = createBrowserHistory();

const storeIns = init({
  models: {},
  redux: {
    devtoolOptions: {
      name: "aspire-demo",
      disabled: false
    },
    reducers: {
      router: connectRouter(historyIns)
    },
    middlewares: [routerMiddleware(historyIns)]
  }
});

export const store = storeIns;
export const history = historyIns;
