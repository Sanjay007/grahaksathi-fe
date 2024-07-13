import React from "react";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ element: Element, isAdmin, ...rest }) {
  return (
    <Route
      {...rest}
      element={isAdmin ? <Element /> : <Navigate to="/login" replace />}
    />
  );
}
