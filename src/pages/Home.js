import React from "react";
import Hero from "../components/HomePageComponents/Hero/Hero";
import Signup from "../components/HomePageComponents/Signup/Signup";
import Footer from "../components/Footer/index";

function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Hero />
      <Signup />
    </div>
  );
}

export default Home;
