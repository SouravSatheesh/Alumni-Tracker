import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return {
    isAuthenticated,
    login() {
      return new Promise((res) => {
        setIsAuthenticated(true);
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setIsAuthenticated(false);
        res();
      });
    },
  };
};

export const isAuth = {
  isAuthenticated: false,
  login() {
    return new Promise((res) => {
      this.isAuthenticated = true;
      res();
    });
  },
  logout() {
    return new Promise((res) => {
      this.isAuthenticated = false;
      res();
    });
  },
};

export const AuthProvider = ({ children }) => {
  return <authContext.Provider value={isAuth}>{children}</authContext.Provider>;
};

export default function AuthConsumer() {
  return useContext(authContext);
}
