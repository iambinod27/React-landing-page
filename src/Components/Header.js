import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Launch your App</span>
          With Confidence and Creativity
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
          vitae.
        </p>
        <a href="#" className="cv-btn">
          Download
        </a>
      </div>
    </div>
  );
}

export default Header;
