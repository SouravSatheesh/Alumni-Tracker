import React from "react";
import "./Login.css";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { isAuth } from "../../../auth/Auth";
import { useRef } from "react";

function Login() {
  const navigate = useNavigate();
  const passToggleRef = useRef();
  const rememberRef = useRef();

  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    isAuth.login().then(() => {
      navigate("/dashboard");
    });
    // console.log(rememberRef.current.checked);
    // console.log(credentials);
  };

  const togglePassword = () => {
    const password = passToggleRef.current;
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  return (
    <div className="login-main d-flex align-items-center justify-content-center">
      <Link to="/">
        <FaHome className="home-btn" />
      </Link>
      <div className="login-container">
        <h2 className="login-heading">Login</h2>
        <div className="login-form">
          <div className="input-cnt">
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              onChange={handleChange}
            ></input>
            {/* placholder space = padding for input (remind me to explain this) */}
            <HiOutlineMail className="icon-email-pswd" />
          </div>
          <div className="input-cnt">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              ref={passToggleRef}
            ></input>
            <BiLockAlt className="icon-email-pswd" />
            <AiFillEye className="icon-eye" onClick={togglePassword} />
          </div>

          <p id="fp">Forgot Password ?</p>
          <label className="rem-cb d-flex align-items-center">
            <input type="checkbox" ref={rememberRef} /> Remember Me ?
          </label>
          <div className="login-button" onClick={handleLogin}>
            LOGIN
          </div>
          {/* <p id="bottom-line"> Don't have an account already? Register Now.</p>
                Use className so that we can reuse this class for register page
           */}
          <p className="bottom-line">
            Don't have an account already ?
            <Link to="/register"> Register Now.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
