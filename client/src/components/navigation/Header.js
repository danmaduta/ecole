import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import DrawerToogle from "./DrawerToogle";
import "./Header.css";

// let loggedInTabs = [
//   { id: "scolaire", name: "Activites Scolaire", comp: "/ecole/scolaire" },
//   { id: "extra", name: "Extrascolaire", comp: "/ecole/extraSchool" },
//   { id: "inscription", name: "Inscription", comp: "/ecole/inscription" },
//   { id: "contact", name: "Contact", comp: "/ecole/contact" }
// ];

// let loggedTabs = [
//   { id: "ecole", name: "ecole", comp: "/ecole" },
//   { id: "vieSolaire", name: "Vie Scolaire", comp: "/ecole/extraSchool" },
//   { id: "infoParent", name: "info Parents", comp: "/blogs" },
//   { id: "logout", name: "Logout", comp: "/api/logout" }
// ];

class Header extends React.Component {
  state = { showSideDrawer: false };

  drawerToggleClicked = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  renderTabs = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href={"/auth/google"} style={{ color: "white" }}>
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li key="2">
            <Link to="/ecole" className="tab">
              Ecole
            </Link>
          </li>,
          <li key="3">
            <Link to="/ecole" className="tab">
              Contact
            </Link>
          </li>,
          <li key="4">
            <Link to="/photos" className="tab">
              Projets
            </Link>
          </li>,
          <li key="5">
            <Link to="/table" className="tab">
              Vie scolaire
            </Link>
          </li>,
          <li key="6">
            <Link to="/blogs" className="tab">
              Info Parents
            </Link>
          </li>,
          <li key="7">
            <a href={"/api/logout"} style={{ color: "white" }}>
              Logout
            </a>
          </li>
        ];
    }
  };

  render() {
    return (
      <header className="Header">
        <DrawerToogle clicked={this.drawerToggleClicked} />
        <SideDrawer
          open={this.state.showSideDrawer}
          close={!this.state.showSideDrawer}
        />
        <Link
          to="/"
          style={{
            marginLeft: "10px",
            fontSize: "25px",
            textDecoration: "none",
            color: "white"
          }}
        >
          Ecole
        </Link>
        <nav className="tabs">{this.renderTabs()}</nav>
      </header>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
