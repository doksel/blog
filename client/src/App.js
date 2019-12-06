import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import MainPageContainer from "./containers/MainPageContainer";

import LoginPageContainer from "./containers/LoginPageContainer";
import ResetPasswordPageContainer from "./containers/ResetPasswordPageContainer";
import RegisterPasswordContainer from "./containers/RegisterPasswordContainer";
import SuccessResetPassword from "./components/pages/SuccessResetPassword";

// import * as Sentry from "@sentry/browser";
// Sentry.init({
//   dsn: "https://fb6dc76f4ed7423b961ee46cb081e33d@sentry.io/1467911"
// });

class App extends Component {
  // componentDidCatch(error, errorInfo) {
  //   Sentry.withScope(scope => {
  //     scope.setExtras(errorInfo);
  //     Sentry.captureException(error);
  //   });
  // }

  render() {
    const { token } = this.props;
    console.log('token',token);
    

    if (token) {
      return (
        <Switch>
          <Route exact path={"/"} component={MainPageContainer} />
          <Route
            exact
            path="/reset-password/:key"
            component={RegisterPasswordContainer}
          />
        </Switch>
      );
    }

    return (
      <Switch>
        <Route
          exact
          path="/reset-password"
          component={ResetPasswordPageContainer}
        />
        <Route exact path="/success-reseted" component={SuccessResetPassword} />
        <Route
          exact
          path="/reset-password/:key"
          component={RegisterPasswordContainer}
        />
        <Route exact component={LoginPageContainer} />
        <Route exact component={MainPageContainer} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  token: state.authStore.token
});

const mapDispatchToProps = dispatch => ({});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
