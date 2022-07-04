import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-main">
      <div className="d-flex align-items-center navbar-links">
        <div>Home</div>
        <div>About</div>
        <div className="navbar-btn" >Login</div>
        <div className="navbar-btn">Register</div>
      </div>
    </div>
  );
}

export default Navbar;
