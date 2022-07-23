import { createContext, useContext } from "react";

const authContext = createContext();

export const isAuth = {
  isAuthenticated: false,
  userType: "student",
  registering: false,
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
