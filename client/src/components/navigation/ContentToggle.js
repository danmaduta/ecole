import React from "react";
import "./ContentToggle.css";

const ContentToggle = props => {
  let summaryClassName = "content-toggle-summary";

  
  if (props.isOpen) {
    summaryClassName += " content-toggle-summary-open";
  }

  return (
    <div style={props.style} className="content-toggle">
      <button
        onClick={() => {
          if (props.onToggle) props.onToggle(!props.isOpen);
        }}
        className={summaryClassName}
      >
        {props.summary}
      </button>
      <div className="content-toggle-details">
        {props.isOpen && props.children}
      </div>
    </div>
  );
};

export default ContentToggle;
