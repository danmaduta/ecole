import React from "react";
import { Link } from "react-router-dom";
import "./Tabs.css";

class Tabs extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="tabs">
        {this.props.data.map(tab => {
          return (
            <Link key={tab.id} to={tab.comp} className="button">
              {tab.name}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Tabs;
