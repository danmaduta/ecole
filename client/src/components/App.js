import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import Header from "./navigation/Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import BlogNew from "./blogs/BlogNew";
import BlogShow from "./blogs/BlogShow";
import BlogEdit from "./blogs/BlogEdit";
import BlogDelete from "./blogs/BlogDelete";
import Ecole from "./ecole/Ecole";
import SideDrawer from "./navigation/SideDrawer";
import Table from "./table/Table";
import history from "../history";
import Photos from "./photos/Photos";

const App = props => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <div className="container">
      <Router history={history}>
        <div>
          <Header />
          <SideDrawer />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/blogs" component={Dashboard} />
            <Route exact path="/blogs/new" component={BlogNew} />
            <Route exact path="/blogs/:id" component={BlogShow} />
            <Route exact path="/blogs/edit/:id" component={BlogEdit} />
            <Route exact path="/blogs/delete/:id" component={BlogDelete} />
            <Route exact path="/ecole" component={Ecole} />
            <Route exact path="/table" component={Table} />
            <Route exact path="/photos" component={Photos} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default connect(
  null,
  { fetchUser }
)(App);
