// me
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = me => ({
  type: LOGIN,
  me
});

export const logout = () => ({
  type: LOGOUT,
})