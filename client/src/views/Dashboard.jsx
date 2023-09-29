import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";


//Body view of the page
const Dashboard = () => {
  return (
    <div>
    <div id="header">
        <div className="container">
            <nav>
                <h1>Ben.</h1>
                {/* //TODO: Reminder to insert image logo of name here */}
                {/* <img src="images/logo.png" alt="logo" /> */}
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>



    </div>
  )
}

export default Dashboard