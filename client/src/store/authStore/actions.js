export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAIL = "SIGN_IN_FAIL";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";

export const USER_LOGOUT = "USER_LOGOUT";

export const userLogout = () => ({
  type: USER_LOGOUT
});

export const signIn = payload => ({
  type: "API",
  payload: {
    query: {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      urlParams: `/guide/sign-in`
    },
    variables: payload,
    actions: [
      SIGN_IN_REQUEST,
      SIGN_IN_SUCCESS,
      SIGN_IN_FAIL
    ]
  }
});

export const signUp = payload => ({
  type: "API",
  payload: {
    query: {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      urlParams: `/guide/sign-up`
    },
    variables: payload,
    actions: [
      SIGN_UP_REQUEST,
      SIGN_UP_SUCCESS,
      SIGN_UP_FAIL
    ]
  }
});