import React from 'react';
import { Navigate } from 'react-router-dom';

function RutaProtegida({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/login" replace />;
}

export default RutaProtegida;