import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero container">
      <div className="hero_text">
        <h1>India's Digital Health Care Delivery Partner</h1>
        <p>
          {" "}
          We connect patient, laboratories, caregiver and phlebotomist to
          serving their needs. Use our platform to search blood testing
          laboratories, book test at home, hospital sample pickup also make
          payment on laboratories and book care-taker.{" "}
        </p>
        <button className="btn explore">
          Explore More<i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
