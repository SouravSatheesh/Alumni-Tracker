import React from "react";
import "./ProfileCard.css";
import avatarIcon from "../../assets/images/avatar.png";

function ProfileCard({ className, data }) {
  return (
    <div
      className={`profile-main-card d-flex flex-column justify-content-around align-items-center ${className}`}
    >
      <img src={avatarIcon} alt="" />
      <div>
        <div className="name">
          {data.firstName} {data.lastName}
        </div>
        <div className="department">{data.department}</div>
        <div className="batch">
          {data.yearGraduation
            ? data.yearGraduation
            : data.expectedGraduationYear}{" "}
          Batch
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
