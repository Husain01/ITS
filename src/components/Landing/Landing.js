import React from "react";
import "./Landing.css";
import heroVid from "../../assets/hero.mp4";

export const Landing = () => {
  return (
    <div className="landing">
      <div className="overlay"></div>
      <video autoPlay loop muted src={heroVid} type="video/mp4" />
      <div className="content">
        <h1>Welcome to ITS Toolings</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
          beatae.
        </h3>
        <button className="landing-CTA">Learn More</button>
      </div>
    </div>
  );
};
