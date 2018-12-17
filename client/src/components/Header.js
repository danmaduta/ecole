import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="2">
            <a href={"/auth/google"}>Login with Google</a>
          </li>,
          <li key="3">
            <a href={"/auth/facebook"}>Login with Facebook</a>
          </li>
        ];
      default:
        return [
          <li key="7">
            <Payments />
          </li>,
          <li key="8" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="6">
            <Link to="/surveys">Surveys</Link>
          </li>,
          <li key="4">
            <Link to="/blogs">My blogs</Link>
          </li>,
          <li key="5">
            <a href={"/api/logout"}>Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="indigo">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/blogs" : "/"}
            className="left brand-logo"
            style={{ marginLeft: "10px" }}
          >
            Marketing
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
