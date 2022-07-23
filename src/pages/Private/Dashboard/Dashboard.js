import React from "react";
import "./Dashboard.css";
import { isAuth } from "../../../auth/Auth";
import AlumniDashboard from "./AlumniDashboard";
import StudentDashboard from "./StudentDashboard";

function Dashboard() {
  return isAuth.userType === "alumni" ? (
    <AlumniDashboard />
  ) : (
    <StudentDashboard />
  );
}

export default Dashboard;
