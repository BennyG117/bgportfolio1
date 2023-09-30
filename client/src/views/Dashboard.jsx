import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import bg1small from "../images/bg1small.jpg";

//Body view of the page
const Dashboard = () => {
  return (
    <div>
      <div id="header">
        <div className="container">
          {/* ------------- NAV BAR & PAGE TITLE -------------  */}
          <nav>
            <h2 className="logo">Ben.</h2>
            {/* //TODO: Reminder to insert image logo of name here */}
            {/* <img src="images/logo.png" alt="logo" /> */}
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="header-text">
            <p>UI/UX Designer</p>
            <h1>
              Hi, I'm <span>Ben Gomez </span>
              <br /> from ...
            </h1>
          </div>
        </div>
      </div>
      {/* ------------- ABOUT SECTION -------------  */}
      <div id="about">
        <div className="container">
            <div className="row">
                {/* left for image */}
                <div className="about-col-1">
                    {/* //TODO: IMAGE TO GO HERE */}
                    {/* <img src="../images/bg1small.jpg" alt="" /> */}
                    <img src={bg1small} alt="picture of Ben" />
                </div>
                {/* right for text */}
                <div className="about-col-2">
                    <h1>About Me</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
