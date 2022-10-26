import React from "react";
import "./About.css";
import Team from "../../assets/Team-img.png";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* Left */}
        <div className="left">
          <h2>We are a team of expert developers</h2>
          <p>See all our products by clicking below button.</p>
          <a href="/dashboard">
            <button className="btn">Our Products</button>
          </a>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={Team} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
