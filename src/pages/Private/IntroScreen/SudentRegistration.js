import React, { useState } from "react";
import AnimatedInputField from "../../../components/AnimatedInputField/AnimatedInputField";
import avatarIcon from "../../../assets/images/avatar.png";
import uploadIcon from "../../../assets/icons/upload-file.svg";
import {
  CustomDropdown,
  MutliDropdown,
} from "../../../components/CustomDropdown/CustomDropdown";
import { Link } from "react-router-dom";

function StudentRegistration() {
  const [resumeFileName, setResumeFileName] = useState("");
  const [profilePic, setProfilePic] = useState(avatarIcon);

  const InterestOptions = [
    { value: "webevelopment", label: "Web Development" },
    { value: "appevelopment", label: "App Development" },
    { value: "machineLearning", label: "Machine Learning" },
    { value: "dataScience", label: "Data Science" },
    { value: "blockChain", label: "Block Chain" },
  ];

  const yearOptions = [
    { value: "1", label: "First year" },
    { value: "2", label: "Second year" },
    { value: "3", label: "Third year" },
    { value: "4", label: "Fourth year" },
  ];

  return (
    <div className="intro-main">
      <div className="intro-container">
        <h1 className="intro-heading">Student Registration Form</h1>
        <div className="d-flex">
          <div>
            <h4>Tell us more about you !</h4>
            <section className="intro-section mt-4">
              <div className="head">Personal Information</div>
              <div className="intro-form-inner">
                <div className="d-flex">
                  <AnimatedInputField name="firstName" title="First Name" />
                  <AnimatedInputField name="lastName" title="Last Name" />
                </div>
                <div className="d-flex">
                  <AnimatedInputField name="email" title="Email" />
                  <AnimatedInputField name="phoneNumber" title="Phone Number" />
                </div>
              </div>
            </section>
          </div>
          <div className="intro-avatar d-flex flex-column align-items-center">
            <img src={profilePic} alt="" />
            <div class="image-input">
              <input
                type="file"
                name="image-input"
                id="image-input"
                class="image-input__input"
                onChange={(e) => {
                  if (!e.target.files[0].name.match(/.(jpg|jpeg|png|gif)$/i))
                    alert("not an image");
                  else setProfilePic(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <label class="image-input__label" for="image-input">
                <span>Upload a profile picture</span>
              </label>
            </div>
          </div>
        </div>
        <section className="intro-section mt-5">
          <div className="head">Educational Qualification</div>
          <div className="m-4 mt-3">
            <div className="sub-head">12th Grade</div>
            <div className="intro-form-inner">
              <div className="d-flex">
                <AnimatedInputField name="board" title="Board" />
                <AnimatedInputField name="percentage" title="Percentage" />
              </div>
            </div>
          </div>
          <div className="m-4 mt-3">
            <div className="sub-head">Undergraduate Degree</div>
            <div className="intro-form-inner">
              <div className="d-flex">
                <AnimatedInputField name="degree" title="Degree" />
                <AnimatedInputField name="branch" title="Branch" />
                <AnimatedInputField name="cgpa" title="CGPA" />
              </div>
              <div className="d-flex">
                <AnimatedInputField
                  name="yearOfJoining"
                  title="Year of Joining"
                />
                <AnimatedInputField
                  name="yearOfGraduation"
                  title="Year of Graduation"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="intro-section mt-5">
          <div className="head">Areas of Interest</div>
          <div className="m-4 mt-3">
            <MutliDropdown
              title="Areas of Interest"
              options={InterestOptions}
            />
          </div>
        </section>
        <section className="intro-section mt-5">
          <div className="head">Resume</div>
          <div className="m-4 mt-3">
            <div class="file-input">
              <input
                type="file"
                name="file-input"
                id="file-input"
                class="file-input__input"
                onChange={(e) => setResumeFileName(e.target.files[0].name)}
              />
              <label class="file-input__label" for="file-input">
                <span>Upload Your Resume</span>
                <img src={uploadIcon} alt="Upload Resume" />
              </label>
              <span className="uploaded-file-name">{resumeFileName}</span>
            </div>
          </div>
        </section>
        <Link to="/dashboard">
          <div className="intro-reg-btn">register</div>
        </Link>
      </div>
    </div>
  );
}

export default StudentRegistration;
