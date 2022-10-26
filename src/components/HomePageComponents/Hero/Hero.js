import React from "react";
import "./Hero.css";
import Crypto from "../../../assets/hero-img.png";
import OutlinedButton from "../../OutlinedButton";
import { RWebShare } from "react-web-share";
import { APP_URL } from "../../../constants";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <h1>
            Track & Invest Crypto with our Crypto
            <span className="primary">App</span>
          </h1>
          <p>Track, Buy, and Sell hundreds of cryptocurrencies</p>
          <div className="input-container">
            <a href="/dashboard">
              {" "}
              <button className="btn">Dashboard</button>
            </a>

            <RWebShare
              data={{
                text: "Checkout my crypto tracker made using React!",
                url: APP_URL,
                title: "Crypto Tracker",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <OutlinedButton text={"Share"} />
            </RWebShare>
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
