import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav className="">
        <div className="nav__container">
          <Link to="/">
            <div className="nav__logo__container">
              <img className="nav__logo" src="../vendors/img/logo.svg" alt="mogeee logo" />
            </div>
          </Link>
          <ul className="nav__links">
            <li className="nav__link">
              <Link to="/work">Work</Link>
            </li>
            <li className="nav__link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav__link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
