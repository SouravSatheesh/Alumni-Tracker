import React, { useState } from "react";
import "./Dashboard.css";
import avatarIcon from "../../../assets/images/avatar.png";
import DashboardCarousel from "../../../components/DashboardCarousel/DashboardCarousel";
import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../reducer/StateProvider";
import axios from "../../../components/axios";
import { useEffect } from "react";

function StudentDashboard() {
  const [{ userData, userId }, dispatch] = useStateValue();
  const [alumniData, setAlumniData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authKey");
      axios({
        method: "get",
        url: `alumni/alumni_list`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setAlumniData(res.data);
      });
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-heading d-flex align-items-center">
          <img src={avatarIcon} alt="" />
          <h1>Hi {userData.firstName},</h1>
        </div>
        <div className="dash-main-cnt">
          <div className="dash-main-left">
            <div className="carousel-container">
              <div className="carousel-heading">Favourite Profiles</div>
              <DashboardCarousel
                type="profile"
                className="dash-sm-carousel"
                data={alumniData}
              />
            </div>
            <div className="carousel-container">
              <div className="carousel-heading">Bookmarked Blogs</div>
              <DashboardCarousel type="blog" className="dash-sm-carousel" />
            </div>
          </div>
          <div className="dash-main-right">
            <Link to="/profile">
              <ProfileCard data={userData} />
            </Link>
          </div>
        </div>
        <div className="dash-nav-section d-flex align-items-center justify-content-center">
          <div>Internships</div>
          <div>Projects</div>
          <div>Your Applications</div>
        </div>
        <div className="carousel-container">
          <div className="carousel-heading d-flex align-items-center justify-content-between mb-2">
            <span>Alumni Profiles</span>
            <Link to="/profiles">
              <span className="explore-btn">Explore</span>
            </Link>
          </div>
          <DashboardCarousel
            type="profile"
            className="dash-lg-carousel"
            cardCount={4}
            data={alumniData}
          />
        </div>
        <div className="carousel-container">
          <div className="carousel-heading d-flex align-items-center justify-content-between mb-2">
            <span>Blogs</span>
            <Link to="/blogs">
              <span className="explore-btn">Explore</span>
            </Link>
          </div>
          <DashboardCarousel
            type="blog"
            className="dash-lg-carousel"
            cardCount={4}
          />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
