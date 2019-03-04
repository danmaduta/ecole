import React from "react";
import Tabs from "./Tabs";
import "./SideDrawer.css";

const sideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <div className={attachedClasses.join(" ")}>
      <Tabs />
    </div>
  );
};

export default sideDrawer;
