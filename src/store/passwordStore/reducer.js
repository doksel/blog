import {
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    REGISTER_PASSWORD_REQUEST,
    REGISTER_PASSWORD_SUCCESS,
    REGISTER_PASSWORD_FAIL
  } from "./actions";

  const initialState = {
    isLoading: false,
    reseted: false,
    error: null,
    key: null,
    password: null,
    confirmed: false
  };

  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case RESET_PASSWORD_REQUEST:
        return {
          ...state,
          error: null,
          reseted: false,
          isLoading: true
        };
      case RESET_PASSWORD_SUCCESS:
        return {
          ...state,
          error: null,
          reseted: true,
          isLoading: false,
        };
      case RESET_PASSWORD_FAIL:
        return {
          ...state,
          isLoading: false,
          error: payload.error
        };
      case REGISTER_PASSWORD_REQUEST:
        return {
          ...state,
          isLoading: true,
          confirmed: false,
          error: null
        };
      case REGISTER_PASSWORD_SUCCESS:
        return {
          ...state,
          isLoading: false,
          confirmed: true,
          error: null,
          key: payload.key,
          password: payload.password
        };
      case REGISTER_PASSWORD_FAIL:
        return {
          ...state,
          isLoading: false,
          confirmed: false,
          error: payload.error
        };

      default:
        return state;
    }
  };
  
