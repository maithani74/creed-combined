import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
const AdminRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  if (!!token && !!user && user.role == 1) return children;
  else return <Navigate to="/" />;
};

export default AdminRoute;
