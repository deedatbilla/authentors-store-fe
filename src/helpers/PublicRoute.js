import { getAuth } from "../features/authentication/authentication-reducer";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const auth = useSelector(getAuth);
  return (
    <Route
      {...rest}
      render={(props) =>
       auth && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
