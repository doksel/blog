import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  USER_LOGOUT
} from "./actions";

const initialState = {
  token: null,
  isLoading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        token: payload.token
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error
      };
    case USER_LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: false,
        token: null
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        token: payload.token
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error
      };
    default:
      return state;
  }
};

