import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import LoginPage from "../components/pages/LoginPage";
import { signIn } from "../store/actions";

const LoginPageContainer = props => <LoginPage {...props} />;

const mapStateToProps = state => ({
  error: state.authStore.error,
  isLoading: state.authStore.isLoading
});

const mapDispatchToProps = dispatch => ({
  signIn: payload => dispatch(signIn(payload))
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPageContainer)
);
