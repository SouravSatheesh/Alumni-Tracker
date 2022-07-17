import React from "react";
import "./ProfileCard.css";
import avatarIcon from "../../assets/images/avatar.png";

function ProfileCard({ className }) {
  return (
    <div
      className={`profile-main-card d-flex flex-column justify-content-around align-items-center ${className}`}
    >
      <img src={avatarIcon} alt="" />
      <div>
        <div className="name">Sourav Satheesh</div>
        <div className="department">Computer Science</div>
        <div className="batch">2023 Batch</div>
      </div>
    </div>
  );
}

export default ProfileCard;
