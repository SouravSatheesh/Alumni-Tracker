import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import ProfileCard from "../../../components/ProfileCard/ProfileCard";

function StudentProfile() {
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
                  <p className="profile-pinfos">First Name</p>
                  <p className="profile-pinfos">Last Name</p>
                </div>
                <div>
                  <p className="profile-pinfos">Phone Number</p>
                  <p className="profile-pinfos">janedoe@gmail.com</p>
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
            <ProfileCard className="mt-4" />
          </div>
        </div>

        <div className="profile-pinfo-heading mt-4">
          Education Qualification
        </div>
        <div className="profile-attributes">
          <div className="profile-subheading mb-3">12th Grade</div>
          <div className="profile-values">
            <div>
              <p className="profile-pinfos">Board</p>
            </div>
            <div>
              <p className="profile-pinfos">Percentage</p>
            </div>
          </div>
          <div className="profile-subheading mb-3">Undergraduate Degree</div>
          <div>
            <div className="profile-values">
              <p className="profile-pinfos">Degree</p>
              <p className="profile-pinfos">Branch</p>
              <p className="profile-pinfos">CGPA</p>
            </div>
            <div className="profile-values">
              <p className="profile-pinfos">Year of Graduation</p>
              <p className="profile-pinfos">Year of Study</p>
            </div>
          </div>
        </div>

        <p className="profile-pinfo-heading mt-4">Relevant Links</p>
        <div className="profile-attributes">
          <div className="profile-values">
            <p className="profile-pinfos">Github</p>
            <p className="profile-pinfos">LinkedIn</p>
          </div>

          <div>
            <p>Others (if any)</p>
            <div className="links-box">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis eveniet magnam, quam in commodi ea adipisci mollitia
              sunt, harum ducimus accusantium ut at possimus ad pariatur iusto
              fugiat? Eius, illum!
            </div>
          </div>
        </div>

        <p className="profile-pinfo-heading mt-4">Areas Of Interest</p>
        <div className="profile-attributes">
          <div className="profile-values">
            <p className="interest-box">Machine Learning</p>
            <p className="interest-box">Python</p>
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