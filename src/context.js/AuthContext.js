import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('userToken') || '');

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('userToken', newToken);
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('userToken');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useAuth = () => useContext(AuthContext);
