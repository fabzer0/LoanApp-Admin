import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import logo from "./common/assets/Logo-dark.png";

const Header = ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <li>
            <a href="http://localhost:5000/api/logout" style={{ color: "black" }}>Logout</a>
          </li>
        );
    }
  };

  return (
    <nav className="navbar navbar-light bg-light" style={{ height: "80px" }}>
      <div
        style={{ height: "50px", width: "90px" }}
        className="ui small image"
      >
        <Link to={auth ? "/clients-dashboard" : "/"} className="left brand-logo">
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              display: "block",
              paddingLeft: "25px"
            }}
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div style={{ float: "right" }}>
        <ul className="right">{renderContent()}</ul>
      </div>
      
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);