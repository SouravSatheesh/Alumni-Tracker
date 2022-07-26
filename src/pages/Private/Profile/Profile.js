import React from "react";
import "./Profile.css";
import StudentProfile from "./StudentProfile";
import { isAuth } from "../../../auth/Auth";
import AlumniProfile from "./AlumniProfile";
import { useStateValue } from "../../../reducer/StateProvider";

function Profile() {
  const [{ userData, userId }, dispatch] = useStateValue();
  return isAuth.userType === "student" ? (
    <StudentProfile data={userData} />
  ) : (
    <AlumniProfile data={userData} />
  );
}

export default Profile;
