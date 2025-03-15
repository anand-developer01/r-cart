import React from 'react';
import { useAuth } from './AuthContext';

function Login() {
  const { isAuthenticated, login } = useAuth();
  console.log(isAuthenticated)
  const handleLogin = () => {
    // login(); // Simulate logging in
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
