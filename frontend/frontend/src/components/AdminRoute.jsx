// src/components/AdminRoute.jsx

import React from "react";
import { Navigate } from "react-router-dom";
import { isAdmin } from "../services/auth";

const AdminRoute = ({ children }) => {

  if (!isAdmin()) {
    alert("You are not authorized to enter this page");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;