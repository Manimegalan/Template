import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import {} from "./authTypes";

const AuthState = (props) => {
  const initialState = {};
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{}}>{props.childern}</AuthContext.Provider>
  );
};
