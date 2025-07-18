import React from "react";
import { Navigate } from "react-router-dom";
import { uselogin } from "../../../cartcontext/logincontext"; // ✅ correct path

const ProtectedRoute = ({ children }) => {
  const { token } = uselogin();

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
