import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getAuth } from '../features/authentication/authentication-reducer';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(getAuth);
  return (
    <Route
      {...rest}
      render={props =>
          auth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;