import React from "react";

class Header extends React.Component {
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

            <ul className="right">
              <li>
                <a>Login with Google</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
