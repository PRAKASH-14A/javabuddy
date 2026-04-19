import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouting = ({ children }) => {
  const [authState, setAuthState] = useState('checking'); // 'checking' | 'valid' | 'invalid'

  useEffect(() => {
    const validateToken = () => {
      const token = localStorage.getItem("jwt_token");

      if (!token) {
        setAuthState('invalid');
        return;
      }

      try {
        // Decode the JWT payload (base64) to check expiry — no library needed
        const payloadBase64 = token.split('.')[1];
        if (!payloadBase64) {
          setAuthState('invalid');
          return;
        }

        const payload = JSON.parse(atob(payloadBase64));
        const currentTime = Math.floor(Date.now() / 1000);

        if (payload.exp && payload.exp < currentTime) {
          // Token has expired
          localStorage.removeItem("jwt_token");
          localStorage.removeItem("user_info");
          window.dispatchEvent(new Event("authChanged"));
          setAuthState('invalid');
        } else {
          setAuthState('valid');
        }
      } catch {
        // Malformed token
        localStorage.removeItem("jwt_token");
        localStorage.removeItem("user_info");
        setAuthState('invalid');
      }
    };

    validateToken();
  }, []);

  if (authState === 'checking') {
    // Brief loading state while checking token
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto mb-4"></div>
          <p className="text-white text-sm font-medium">Verifying session...</p>
        </div>
      </div>
    );
  }

  return authState === 'valid' ? children : <Navigate to="/login" replace />;
};

export default PrivateRouting;