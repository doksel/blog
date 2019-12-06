import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ResetPassword from "../components/pages/ResetPassword";
import { resetPassword } from "../store/actions";

const ResetPasswordPageContainer = props => <ResetPassword {...props} />;

const mapStateToProps = state => ({
  error: state.passwordStore.error,
  isLoading: state.passwordStore.isLoading,
  reseted: state.passwordStore.reseted
});

const mapDispatchToProps = dispatch => ({
  resetPassword: payload => dispatch(resetPassword(payload))
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ResetPasswordPageContainer)
);
