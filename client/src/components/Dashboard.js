import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

import BlogList from "./blogs/BlogList";

const Dashboard = () => {
  return (
    <div className="ui container">
      <div className="ui primary basic button">
        <Link to="/blogs/new">Add info</Link>
      </div>
      <BlogList />
    </div>
  );
};

export default Dashboard;
