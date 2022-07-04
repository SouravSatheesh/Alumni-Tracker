import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import home_logo from "../../assets/images/home-grad-logo.png"

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-main">
		<img src={home_logo} className="home-logo" alt="" />
		<h1 className="main-heading">Beyond Graduation</h1>
		<h2 className="sub-heading">Keeping connections alive</h2>
	  </div>
    </div>
  );
}

export default Home;
