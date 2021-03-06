import camelCase from 'lodash/camelCase';
import { reducer as thunk } from 'redux-saga-thunk';

const reducers = { thunk };
const req = require.context('.', true, /\.\/.+\/reducer\.js$/);

req.keys().forEach((key) => {
  const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'));
  reducers[storeName] = req(key).default;
});

export default reducers;
