import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import "./style/Header.css";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a className="btn" href="/auth/google">
              Login with Google
            </a>
          </li>
        );

      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2">
            <span style={{ marginRight: "15px" }} className="btn blue" href="">
              Credits: {this.props.auth.credits}
            </span>
          </li>,
          <li key="3">
            <a className="btn grey" href="/api/logout">
              Logout
            </a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s6">
              <Link
                to={this.props.auth ? "/surveys" : "/"}
                className="left brand-logo"
              >
                <img className="logo" src={require("./images/logo.PNG")} />
              </Link>
            </div>

            <ul className="right">{this.renderContent()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
