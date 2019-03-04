import React from "react";
import { Link } from "react-router-dom";
import "./Tabs.css";
import ContentToggle from "./ContentToggle";

let sideBar = {
  ecole: [
    <li key="1" style={{ padding: "5px" }}>
      <Link to="/ecole">Activites Scolaire</Link>
    </li>,
    <li key="2" style={{ padding: "5px" }}>
      <Link to="/ecole">Garderies</Link>
    </li>,
    <li key="3" style={{ padding: "5px" }}>
      <Link to="/ecole">Parascolaire</Link>
    </li>
  ],
  projets: [
    <li key="4" style={{ padding: "5px" }}>
      <Link to="/photos">Projet d'etablissement</Link>
    </li>,
    <li key="5" style={{ padding: "5px" }}>
      <Link to="/photos">Projet pedagogique</Link>
    </li>,
    <li key="6" style={{ padding: "5px" }}>
      <Link to="/photos">Projet educatif</Link>
    </li>
  ],
  vie_scolaire: [
    <li key="8" style={{ padding: "5px" }}>
      <Link to="/table">Association de parents</Link>
    </li>,
    <li key="9" style={{ padding: "5px" }}>
      <Link to="/table">Calendrier</Link>
    </li>,
    <li key="10" style={{ padding: "5px" }}>
      <Link to="/table">Liste du materiel scolaire</Link>
    </li>,
    <li key="11" style={{ padding: "5px" }}>
      <Link to="/table">Menu repas chaud</Link>
    </li>,
    <li key="12" style={{ padding: "5px" }}>
      <Link to="/table">Reglement d'ordre interieur</Link>
    </li>
  ]
};

class Tabs extends React.Component {
  state = {
    tabs: [
      {
        id: "ecole",
        name: "Ecole",
        isOpen: false
      },
      {
        id: "projets",
        name: "Projets",
        isOpen: false
      },
      {
        id: "vie_scolaire",
        name: "Vie Scolaire",
        isOpen: false
      }
    ]
  };

  handleTabsToggle = (toggledtab, isOpen) => {
    this.setState({
      tabs: this.state.tabs.map(tab => {
        if (tab.name === toggledtab.name) {
          tab.isOpen = isOpen;
        }

        return tab;
      })
    });
  };

  render() {
    return (
      <div>
        {this.state.tabs.map(tab => {
          return (
            <ContentToggle
              key={tab.id}
              style={{ width: 200 }}
              summary={tab.name}
              isOpen={tab.isOpen}
              onToggle={isOpen => this.handleTabsToggle(tab, isOpen)}
            >
              <ul>{sideBar[tab.id]}</ul>
            </ContentToggle>
          );
        })}
      </div>
    );
  }
}
export default Tabs;
