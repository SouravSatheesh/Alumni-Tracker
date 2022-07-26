import React, { useEffect } from "react";
import ProfileCard from "../../../components/ProfileCard/ProfileCard";

function AlumniProfile({ data }) {
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
                <div className="mb-2">Address</div>
                <div className="address-box">{data.addres}</div>
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
          <div className="profile-subheading mb-3">Undergraduate Degree</div>
          <div>
            <div className="profile-values">
              <p className="profile-pinfos">BTech</p>
              <p className="profile-pinfos">{data.department}</p>
              <p className="profile-pinfos">{data.yearGraduation}</p>
            </div>
          </div>
        </div>

        <p className="profile-pinfo-heading mt-5">Work Experience</p>
        <div className="profile-attributes mt-5">
          {data.workExperience?.map((exp) => {
            return (
              <>
                <div className="profile-values">
                  <div>
                    <p className="profile-pinfos">{exp.company}</p>
                    <p className="profile-pinfos">{exp.from}</p>
                  </div>
                  <div>
                    <p className="profile-pinfos">{exp.role}</p>
                    <p className="profile-pinfos">{exp.to}</p>
                  </div>
                </div>
                {/* <div>
                  <div className="address-box w-50">Random Job Description</div>
                </div> */}
              </>
            );
          })}
        </div>

        <p className="profile-pinfo-heading mt-5">Publications</p>
        <div className="profile-attributes">
          No publication uploaded
          {/* <div className="profile-values">
            <div>
              <p className="profile-pinfos">Title</p>
              <div className="publication-cnt">
                <div className="address-box">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi quas pariatur minus aperiam, totam tempora optio
                  accusantium illo quam culpa odio dolores, officia tempore eius
                  a. Deserunt rem recusandae quibusdam!
                </div>
              </div>
            </div>
            <div>
              <p className="profile-pinfos">Domain</p>
              <p className="profile-pinfos">Links</p>
            </div>
          </div> */}
        </div>

        <p className="profile-pinfo-heading mt-4">Domain</p>
        <div className="profile-attributes">
          <div className="profile-values">
            {data.areasOfInterest?.map((interest) => (
              <p className="interest-box">{interest}</p>
            ))}
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

        <div className="update-button-div">
          <button className="update-button">UPDATE</button>
        </div>
      </div>
    </div>
  );
}

export default AlumniProfile;
