import React from "react";
import image from "../img/github-logo.png";

const logo = () => {
  return (
    <div className="header-wrapper">
      <img src={image} alt="Logo" className="img-logo" />
      <h1>GitHub Profile Viewer</h1>
    </div>
  );
};

export default logo;
