import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { ConnectedRouter } from "react-router-redux";
import "sanitize.css/sanitize.css";
import "babel-polyfill";

import "./index.css";
import App from "./App";
import { store, persistor, history } from "./store/store";

const target = document.querySelector("#root");

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  target
);
