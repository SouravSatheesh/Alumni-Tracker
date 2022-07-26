import React from "react";
import "./DashProfileCard.css";
import avatarIcon from "../../../assets/images/avatar.png";

function DashProfileCard({ userData }) {
  return (
    <div className="d-prof-card">
      <div className="d-p-card-upper">
        <img src={avatarIcon} alt="" />
      </div>
      <div className="d-p-card-lower">
        <div className="name">
          {userData.firstName} {userData.lastName}
        </div>
        <div className="department">{userData.department}</div>
        <div className="batch">
          {userData.yearGraduation
            ? userData.yearGraduation
            : userData.expectedGraduationYear}{" "}
          Batch
        </div>
      </div>
    </div>
  );
}

export default DashProfileCard;
