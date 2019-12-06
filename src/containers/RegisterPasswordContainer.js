import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import RegisterPassword from "../components/pages/RegisterPassword";
import { registerPassword } from "../store/actions";

const RegisterPasswordPageContainer = props => <RegisterPassword {...props} />;

const mapStateToProps = state => ({
  error: state.passwordStore.error,
  isLoading: state.passwordStore.isLoading,
  confirmed: state.passwordStore.confirmed
});

const mapDispatchToProps = dispatch => ({
  registerPassword: payload => dispatch(registerPassword(payload))
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterPasswordPageContainer)
);
