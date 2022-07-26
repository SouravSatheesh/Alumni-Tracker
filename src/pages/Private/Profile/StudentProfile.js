import React from "react";
import { useEffect } from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import ProfileCard from "../../../components/ProfileCard/ProfileCard";

function StudentProfile({ data }) {
  return (
    <div className="profile-main">
      <div className="profile-container">
        <div className="d-flex prof-cnt">
          <div className="profile-left">
            <h2 className="profile-heading mb-4">Profile</h2>
            <p className="profile-pinfo-heading">Personal Information</p>
            <div className="profile-attributes">
              <div className="profile-values">
                <div>
                  <p className="profile-pinfos">{data.firstName}</p>
                  <p className="profile-pinfos">{data.lastName}</p>
                </div>
                <div>
                  {/* <p className="profile-pinfos">Phone Number</p> */}
                  <p className="profile-pinfos">{data.email}</p>
                </div>
              </div>
              <div>
                <div className="mb-2">{data.address}</div>
                <div className="address-box">{data.address}</div>
              </div>
            </div>
          </div>
          <div className="profile-right">
            <ProfileCard className="mt-4" data={data} />
          </div>
        </div>

        <div className="profile-pinfo-heading mt-4">
          Education Qualification
        </div>
        <div className="profile-attributes">
          <div className="profile-subheading mb-3">12th Grade</div>
          <div className="profile-values">
            <div>
              <p className="profile-pinfos">{data.higherSecondary.board}</p>
            </div>
            <div>
              <p className="profile-pinfos">{data.higherSecondary.cgpa} %</p>
            </div>
          </div>
          <div className="profile-subheading mb-3">Undergraduate Degree</div>
          <div>
            <div className="profile-values">
              <p className="profile-pinfos">{data.degree}</p>
              <p className="profile-pinfos">{data.department}</p>
              <p className="profile-pinfos">{data.cgpa}</p>
            </div>
            <div className="profile-values">
              <p className="profile-pinfos">{data.expectedGraduationYear}</p>
              <p className="profile-pinfos">
                Year {data.expectedGraduationYear - data.yearOfJoining}
              </p>
            </div>
          </div>
        </div>

        <p className="profile-pinfo-heading mt-4">Relevant Links</p>
        <div className="profile-attributes">
          <div className="profile-values">
            <p className="profile-pinfos">Github: none</p>
            <p className="profile-pinfos">LinkedIn: none</p>
          </div>

          <div>
            <p>Others (if any)</p>
            <div className="links-box"></div>
          </div>
        </div>

        <p className="profile-pinfo-heading mt-4">Areas Of Interest</p>
        <div className="profile-attributes">
          <div className="profile-values">
            {data.areasOfInterest.map((interest, i) => (
              <p className="interest-box" key={i}>
                {interest}
              </p>
            ))}
          </div>
        </div>

        <p className="profile-pinfo-heading mt-4">Resume</p>
        <div className="profile-attributes">
          <button className="resume-button">
            View Your Resume <AiOutlineFileDone />
          </button>
        </div>

        <div className="update-button-div">
          <button className="update-button">UPDATE</button>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
