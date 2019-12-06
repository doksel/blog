import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import RegistrationPage from "../components/pages/RegistrationPage";
import { signIn } from "../store/actions";

const RegistrationPageContainer = props => <RegistrationPage {...props} />;

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
  )(RegistrationPageContainer)
);
