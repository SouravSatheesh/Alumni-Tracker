import React, { useEffect, useState } from "react";
import AnimatedInputField from "../../../components/AnimatedInputField/AnimatedInputField";
import avatarIcon from "../../../assets/images/avatar.png";
import { MutliDropdown } from "../../../components/CustomDropdown/CustomDropdown";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../../../auth/Auth";

function AluminiRegistration() {
  const navigate = useNavigate();

  const [profilePic, setProfilePic] = useState(avatarIcon);
  const [workCount, setWorkCount] = useState(1);
  const [workExp, setWorkExp] = useState([
    {
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleWorkExpChange = (e, index) => {
    const newWorkExp = [...workExp];
    newWorkExp[index][e.target.name] = e.target.value;
    setWorkExp(newWorkExp);
    console.log(newWorkExp);
  };

  const addNewExp = () => {
    setWorkCount(workCount + 1);
    setWorkExp([
      ...workExp,
      {
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeExp = (index) => {
    const newWorkExp = [...workExp];
    newWorkExp.splice(index, 1);
    setWorkExp(newWorkExp);
    setWorkCount(workCount - 1);
    console.log(newWorkExp);
  };

  const InterestOptions = [
    { value: "webevelopment", label: "Web Development" },
    { value: "appevelopment", label: "App Development" },
    { value: "machineLearning", label: "Machine Learning" },
    { value: "dataScience", label: "Data Science" },
    { value: "blockChain", label: "Block Chain" },
  ];

  const onRegister = () => {
    isAuth.login().then(() => {
      isAuth.isAuthenticated = true;
      navigate("/dashboard");
    });
  };

  useEffect(() => {}, [workCount]);

  return (
    <div className="intro-main">
      <div className="intro-container">
        <h1 className="intro-heading">Alumni Registration Form</h1>
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
            <div className="sub-head">Undergraduate Degree</div>
            <div className="intro-form-inner">
              <div className="d-flex">
                <AnimatedInputField name="degree" title="Degree" />
                <AnimatedInputField name="department" title="Department" />
                <AnimatedInputField
                  name="yearOfGraduation"
                  title="Year of Graduation"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="intro-section mt-5">
          <div className="head d-flex">
            Work Experience
            <div
              className="add-experience-button d-flex ms-3"
              onClick={addNewExp}
            >
              <div className="me-3">+</div>
              [Add another experience]
            </div>
          </div>
          {[...Array(workCount)].map((x, i) => (
            <>
              <div className="m-4 my-5">
                <div className="intro-form-inner">
                  <div className="d-flex">
                    <AnimatedInputField
                      id={`company${i}`}
                      name="company"
                      title="Company/Organisation"
                      value={workExp[i].company}
                      onChange={(e) => handleWorkExpChange(e, i)}
                    />
                    <AnimatedInputField
                      id={`startDate${i}`}
                      type="date"
                      name="startDate"
                      title="From"
                      onChange={(e) => handleWorkExpChange(e, i)}
                    />
                  </div>
                  <div className="d-flex">
                    <AnimatedInputField
                      id={`role${i}`}
                      name="role"
                      title="Role/Job Title"
                      onChange={(e) => handleWorkExpChange(e, i)}
                    />
                    <AnimatedInputField
                      id={`endDate${i}`}
                      type="date"
                      name="endDate"
                      title="To"
                      onChange={(e) => handleWorkExpChange(e, i)}
                    />
                  </div>
                  <div className="d-flex align-items-end">
                    <AnimatedInputField
                      id={`description${i}`}
                      as="textarea"
                      name="description"
                      title="Job Description"
                      rows={4}
                      className="mt-5"
                      onChange={(e) => handleWorkExpChange(e, i)}
                    />
                    {workCount > 1 && (
                      <div
                        className="d-flex align-items-center delete-experience"
                        onClick={() => {
                          removeExp(i);
                        }}
                      >
                        <FaTrash className="me-2" /> Delete this Experience
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          ))}
        </section>
        <section className="intro-section mt-5">
          <div className="head">Domain</div>
          <div className="m-4 mt-3">
            <MutliDropdown title="Domain" options={InterestOptions} />
          </div>
        </section>

        <div className="intro-reg-btn" onClick={onRegister}>
          register
        </div>
      </div>
    </div>
  );
}

export default AluminiRegistration;
