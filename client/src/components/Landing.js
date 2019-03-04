import React from "react";
import { Link } from "react-router-dom";
import Fig1 from "../assets/images/1.jpg";
import Fig2 from "../assets/images/2.jpg";
import Fig3 from "../assets/images/3.jpg";
import Fig4 from "../assets/images/4.jpg";
import Fig5 from "../assets/images/5.jpg";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="ui container">
      <div className="ui cards">
        <div className="ui card">
          <div className="image">
            <img src={Fig2} alt="Forest 1" />
          </div>
          <div className="content">
            <p className="header">Ecole</p>
            <div className="description">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="extra content">
            <Link to="/ecole">Read more...</Link>
          </div>
        </div>
        <div className="ui card">
          <div className="image">
            <img src={Fig3} alt="Forest 2" />
          </div>
          <div className="content">
            <p className="header">Contact</p>
            <div className="description">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="extra content">
            <Link to="/ecole">Read more...</Link>
          </div>
        </div>
        <div className="ui card">
          <div className="image">
            <img src={Fig1} alt="Forest 3" />
          </div>
          <div className="content">
            <p className="header">Projets</p>
            <div className="description">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="extra content">
            <Link to="/photos">Read more...</Link>
          </div>
        </div>
        <div className="ui card">
          <div className="image">
            <img src={Fig4} alt="Forest 4" />
          </div>
          <div className="content">
            <p className="header">Vie scolaire</p>
            <div className="description">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="extra content">
            <Link to="/table">Read more...</Link>
          </div>
        </div>
        <div className="ui card">
          <div className="image">
            <img src={Fig5} alt="Forest 5" />
          </div>
          <div className="content">
            <p className="header">Info Parents</p>
            <div className="description">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="extra content">
            <Link to="/blogs">Read more...</Link>
          </div>
        </div>
      </div>
      <br />
      <div>
        <span className="ui header">Lorem ipsum dolor sit amet,</span>{" "}
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  );
};

export default Landing;
