export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL";

export const REGISTER_PASSWORD_REQUEST = "REGISTER_PASSWORD_REQUEST";
export const REGISTER_PASSWORD_SUCCESS = "REGISTER_PASSWORD_SUCCESS";
export const REGISTER_PASSWORD_FAIL = "REGISTER_PASSWORD_FAIL";

export const resetPassword = payload => ({
  type: "API",
  payload: {
    query: {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      urlParams: `/guide/reset-password`
    },
    variables: payload,
    actions: [
        RESET_PASSWORD_REQUEST,
        RESET_PASSWORD_SUCCESS,
        RESET_PASSWORD_FAIL
    ]
  }
});

export const registerPassword = payload => ({
  type: "API",
  payload: {
    query: {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      urlParams: `/guide/register-password`
    },
    variables: payload,
    actions: [
        REGISTER_PASSWORD_REQUEST,
        REGISTER_PASSWORD_SUCCESS,
        REGISTER_PASSWORD_FAIL
    ]
  }
});