import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <a href="/">
          {" "}
          <h2>
            Crypto<span className="primary">App</span>
          </h2>
        </a>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about-us">About us</a>
          </li>
          <li>
            <a href="/trending">Trending Coins</a>
          </li>
          <li>
            <a href="/compare">Comapre Coins</a>
          </li>
        </ul>
        <a href="/dashboard">
          {" "}
          <div className="btn-group">
            <button className="btn">Dashboard</button>
          </div>
        </a>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
