import React from "react";
import { Link } from "react-router-dom";

const Dashboard2 = () => {
  return (
    <div>
      <div className="fixed-action-btn">
        <Link to="/surveys" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard2;
