import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="Card">
      <img src={props.img} />
      <div className="content">
        <h3>Title</h3>
        <p>Lorem ipsum</p>
      </div>
      <div className="extraContent">
        <p>Read more...</p>
      </div>
    </div>
  );
};

export default Card;
