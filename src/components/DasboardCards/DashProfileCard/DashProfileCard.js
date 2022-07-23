import React from "react";
import "./DashProfileCard.css";
import avatarIcon from "../../../assets/images/avatar.png";

function DashProfileCard() {
  return (
    <div className="d-prof-card">
      <div className="d-p-card-upper">
        <img src={avatarIcon} alt="" />
      </div>
      <div className="d-p-card-lower">
        <div className="name">Natasha Mathew</div>
        <div className="department">Computer Science</div>
        <div className="batch">1968 Batch</div>
      </div>
    </div>
  );
}

export default DashProfileCard;
