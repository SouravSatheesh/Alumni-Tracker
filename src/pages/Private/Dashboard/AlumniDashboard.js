import React from "react";
import "./Dashboard.css";
import avatarIcon from "../../../assets/images/avatar.png";
import DashboardCarousel from "../../../components/DashboardCarousel/DashboardCarousel";
import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import { Link } from "react-router-dom";

function AlumniDashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-heading d-flex align-items-center">
          <img src={avatarIcon} alt="" />
          <h1>Hi Alumni,</h1>
        </div>
        <div className="dash-main-cnt">
          <div className="dash-main-left">
            <div className="carousel-container">
              <div className="carousel-heading">Your Blogs</div>
              <DashboardCarousel type="blog" className="dash-sm-carousel" />
            </div>
            <div className="carousel-container">
              <div className="carousel-heading">Faculties</div>
              <DashboardCarousel type="profile" className="dash-sm-carousel" />
            </div>
          </div>
          <div className="dash-main-right">
            <Link to="/profile">
              <ProfileCard />
            </Link>
          </div>
        </div>
        <div className="dash-nav-section d-flex align-items-center justify-content-center">
          <div>POST NEW INTERNSHIPS&nbsp;/ PROJECTS</div>
          <div>CREATE YOUR OWN BLOGS</div>
          <div>PROJECT PROGRESS</div>
        </div>
        <div className="carousel-container">
          <div className="carousel-heading">Student Profiles</div>
          <DashboardCarousel
            type="profile"
            className="dash-lg-carousel"
            cardCount={4}
          />
        </div>
        <div className="carousel-container">
          <div className="carousel-heading">Blogs</div>
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

export default AlumniDashboard;
