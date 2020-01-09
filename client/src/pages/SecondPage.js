
import React, { useEffect, useReducer } from "react";
import reducer from "../libs/reducers/reducer";

export default () => {
  const [state, dispatch] = useReducer (reducer, [{id: 1, name:'user 1'}, {id: 2, name:'user 2'}, {id: 3, name:'user 3'}]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(state))
  }, state);

  return(
    <div>
      <h1>second page</h1>
      <div>Users:</div>
      {state.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
