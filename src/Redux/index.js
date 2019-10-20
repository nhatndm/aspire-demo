import { init } from "@rematch/core";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import app from "firebase/app";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

const historyIns = createBrowserHistory();
const firebaseIns = app.initializeApp(config);

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
export const firebaseApp = firebaseIns;
