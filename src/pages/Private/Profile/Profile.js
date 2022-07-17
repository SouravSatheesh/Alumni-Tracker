import React from "react";
import "./Profile.css";
import { AiOutlineFileDone } from "react-icons/ai";
import ProfileCard from "../../../components/ProfileCard/ProfileCard";

function Profile() {
  return (
    <div className="student-main">
      <div className="student-container">
        <div className="d-flex prof-cnt">
          <div className="profile-left">
            <h2 className="student-heading mb-4">Profile</h2>
            <p className="student-pinfo-heading">Personal Information</p>
            <div className="student-attributes">
              <div className="student-values">
                <div>
                  <p className="student-pinfos">First Name</p>
                  <p className="student-pinfos">Last Name</p>
                </div>
                <div>
                  <p className="student-pinfos">Phone Number</p>
                  <p className="student-pinfos">janedoe@gmail.com</p>
                </div>
              </div>
              <div>
                <div className="mb-2">Address</div>
                <div className="address-box">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi quas pariatur minus aperiam, totam tempora optio
                  accusantium illo quam culpa odio dolores, officia tempore eius
                  a. Deserunt rem recusandae quibusdam!
                </div>
              </div>
            </div>
          </div>
          <div className="profile-right">
            <ProfileCard className="mt-4"/>
          </div>
        </div>

        <p className="student-pinfo-heading">Education Qualification</p>
        <div className="student-attributes">
          <p className="student-subheading">12th Grade</p>
          <div className="student-values">
            <div>
              <p className="student-pinfos">Board</p>
            </div>
            <div>
              <p className="student-pinfos">Percentage</p>
            </div>
          </div>
          <p className="student-subheading">Undergraduate Degree</p>
          <div>
            <div className="student-values">
              <p className="student-pinfos">Degree</p>
              <p className="student-pinfos">Branch</p>
              <p className="student-pinfos">CGPA</p>
            </div>
            <div className="student-values">
              <p className="student-pinfos">Year of Graduation</p>
              <p className="student-pinfos">Year of Study</p>
            </div>
          </div>
        </div>

        <p className="student-pinfo-heading">Relevant Links</p>
        <div className="student-attributes">
          <div className="student-values">
            <p className="student-pinfos">Github</p>
            <p className="student-pinfos">LinkedIn</p>
          </div>

          <div>
            <p>Others(if any)</p>
            <div className="links-box"></div>
          </div>
        </div>

        <p className="student-pinfo-heading">Areas Of Interest</p>
        <div className="student-attributes">
          <div className="student-values">
            <p className="interest-box">Machine Learning</p>
            <p className="interest-box">Python</p>
          </div>
        </div>

        <p className="student-pinfo-heading">Resume</p>
        <div className="student-attributes">
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

export default Profile;
