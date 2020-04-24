import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import * as actions from "../actions";
import Landing from "./Landing";
import ClientProfile from "./clientProfile/ClientProfile";
import CompanyDashboard from "./CompanyDashboard";
import Tabs from "./common/Tabs";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/clients-dashboard" component={Tabs} />
            <Route path="/client-profile" component={ClientProfile} />
            <Route path="/company-dashboard" component={CompanyDashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
