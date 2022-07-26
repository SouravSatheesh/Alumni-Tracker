import React from "react";
import "./ProfilesView.css";
import { isAuth } from "../../../auth/Auth";
import StudentProfilesView from './StudentProfilesView';
import AlumniProfilesView from './AlumniProfilesView';

function ProfilesView() {
  return isAuth.userType === "student" ? <AlumniProfilesView /> : <StudentProfilesView />;
}

export default ProfilesView;
