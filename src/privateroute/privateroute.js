import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IsAuth } from "../auth/helper/authhelper";
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        IsAuth() ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
