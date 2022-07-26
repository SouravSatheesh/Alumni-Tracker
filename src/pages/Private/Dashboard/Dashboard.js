import React, { useEffect } from "react";
import "./Dashboard.css";
import { isAuth } from "../../../auth/Auth";
import AlumniDashboard from "./AlumniDashboard";
import StudentDashboard from "./StudentDashboard";
import { useStateValue } from "../../../reducer/StateProvider";

function Dashboard() {
  const [{ userData, userId }, dispatch] = useStateValue();

  return isAuth.userType === "alumni" ? (
    <AlumniDashboard />
  ) : (
    <StudentDashboard />
  );
}

export default Dashboard;
