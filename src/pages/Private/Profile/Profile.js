import React from "react";
import "./Profile.css";
import StudentProfile from "./StudentProfile";
import { isAuth } from "../../../auth/Auth";
import AlumniProfile from "./AlumniProfile";

function Profile() {
  return isAuth.userType === "student" ? <StudentProfile /> : <AlumniProfile />;
}

export default Profile;
