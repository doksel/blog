import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import MainPage from "../components/pages/MainPage";
import { profileGet, userLogout } from "../store/actions";

const MainPageContainer = props => (
  <MainPage {...props} />
);

const mapStateToProps = state => ({
  error: state.profileStore.error,
  isLoading: state.profileStore.isLoading,
  token: state.authStore.token
});

const mapDispatchToProps = dispatch => ({
  profileGet: payload => dispatch(profileGet(payload)),
  userLogout: () => dispatch(userLogout())
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainPageContainer)
);
