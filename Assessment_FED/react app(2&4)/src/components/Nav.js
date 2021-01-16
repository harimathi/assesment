import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="navLinkActive">
              Post/Comments Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/task2" activeClassName="navLinkActive">
              Matrix Fill Chart
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
