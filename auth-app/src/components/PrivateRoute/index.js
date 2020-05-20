import React from "react";
import { Route, Redirect } from "react-router-dom";
import { tokenName } from "../../data";

const PrivateRoute = ({ component: Component, ...props }) => {
  const token = localStorage.getItem(tokenName);
  return (
    <Route
      {...props}
      render={() => {
        if (token) return <Component />;
        else return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
