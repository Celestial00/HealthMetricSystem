// PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = Cookies.get("userId");
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
