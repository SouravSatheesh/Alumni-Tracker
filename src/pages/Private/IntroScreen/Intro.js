import React from "react";
import "./Intro.css";
import StudentRegistration from "./SudentRegistration";
import AluminiRegistration from "./AlumniRegistration";
import { isAuth } from "../../../auth/Auth";

function Intro() {
  if (isAuth.userType === "student") return <StudentRegistration />;
  else if (isAuth.userType === "alumni") return <AluminiRegistration />;
}

export default Intro;
