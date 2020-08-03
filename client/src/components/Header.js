import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );

      default:
        return (
          <li>
            <a href="">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s6">
              <a href="#" className="left brand-logo">
                Audit
              </a>
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
