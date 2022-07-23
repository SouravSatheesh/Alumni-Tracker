import React, { useRef, useState } from "react";
import "./Register.css";
import "../Login/Login.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { isAuth } from "../../../auth/Auth";
import { FaHome } from "react-icons/fa";

function Register() {
  const navigate = useNavigate();
  const passToggleRef = useRef();
  const confPassToggleRef = useRef();
  const [userType, setUserType] = useState("student");

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    isAuth.userType = userType;
    isAuth.registering = true;
    console.log(isAuth);
    navigate("/intro");
    // console.log(credentials);
  };

  const togglePassword = (param) => {
    const password =
      param === "pass" ? passToggleRef.current : confPassToggleRef.current;
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  return (
    <div className="register-main d-flex align-items-center justify-content-center">
      <Link to="/">
        <FaHome className="home-btn" />
      </Link>

      <div className="register-container">
        <h2 className="login-heading">Register</h2>
        <div className="register-tab d-flex align-items-center justify-content-center">
          <div
            className={`${
              userType === "student" ? "active-tab" : ""
            } reg-tab-head`}
          >
            <span onClick={() => setUserType("student")}>Student</span>
          </div>
          <div
            className={`${
              userType === "alumni" ? "active-tab" : ""
            } reg-tab-head`}
          >
            <span onClick={() => setUserType("alumni")}>Alumni</span>
          </div>
        </div>
        <div className="register-form">
          <div className="register-inputs">
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Name"
              onChange={handleChange}
            />
            <BsFillPersonFill className="icon-email-name-pswd" />
          </div>

          <div className="register-inputs">
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              onChange={handleChange}
            />
            <HiOutlineMail className="icon-email-name-pswd" />
          </div>

          <div className="register-inputs">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              ref={passToggleRef}
            />
            <BiLockAlt className="icon-email-name-pswd" />
            <AiFillEye
              className="icon-eye"
              id="pass"
              onClick={() => togglePassword("pass")}
            />
          </div>

          <div className="register-inputs">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              ref={confPassToggleRef}
            />
            <BiLockAlt className="icon-email-name-pswd" />
            <AiFillEye
              className="icon-eye"
              id="confpass"
              onClick={() => togglePassword("confpass")}
            />
          </div>

          <div className="login-button" onClick={handleRegister}>
            REGISTER
          </div>
          <p className="bottom-line">
            Have an account already ?<Link to="/login"> Login Now.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
