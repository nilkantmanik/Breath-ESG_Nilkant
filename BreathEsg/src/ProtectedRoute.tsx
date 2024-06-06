import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from './services/AuthService';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const isValid = await AuthService.isTokenValid();
      setIsAuthenticated(isValid);
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
