import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuth } from "../../auth/Auth";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    isAuth.logout();
    navigate("/");
  };

  return (
    <div className="navbar-main">
      <div className="d-flex align-items-center navbar-links">
        <Link to="/">
          <div className="nav-link">Home</div>
        </Link>
        <div className="nav-link">About</div>
        <Link to="/login">
          <div className="navbar-btn">Login</div>
        </Link>
        {isAuth.isAuthenticated ? (
          <div className="navbar-btn" onClick={handleLogout}>
            Logout
          </div>
        ) : (
          <>
            <Link to="/register">
              <div className="navbar-btn">Register</div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
