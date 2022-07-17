import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { isAuth } from "./auth/Auth";
import Home from "./pages/Public/Home/Home";
import Login from "./pages/Public/Login/Login";
import Register from "./pages/Public/Register/Register";
import Intro from "./pages/Private/IntroScreen/Intro";
import Dashboard from "./pages/Private/Dashboard/Dashboard";
import Profile from "./pages/Private/Profile/Profile";

const WithNav = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const PrivateRoute = ({ comp: Component }) => {
  return isAuth.isAuthenticated === true ? (
    <Component />
  ) : (
    <Navigate to="/login" replace />
  );
};

const PublicRoute = ({ comp: Component }) => {
  return isAuth.isAuthenticated === true ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Component />
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<PublicRoute comp={Login} />} />
          <Route path="/register" element={<PublicRoute comp={Register} />} />
          <Route element={<WithNav />}>
            <Route
              path="/dashboard"
              element={<PrivateRoute comp={Dashboard} />}
            />
            <Route path="/profile" element={<PrivateRoute comp={Profile} />} />
            <Route path="/intro" element={<PrivateRoute comp={Intro} />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
