import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <Link to="/" className="nav__logo__link">
            <div className="nav__logo__container">
              <img className="nav__logo" src="../vendors/img/logo.svg" alt="mogeee logo" />
              {/* <h1 className="nav__logo">mogeee</h1> */}
            </div>
          </Link>
          <ul className="nav__links">
            <li className="nav__link">
              <Link to="/work">work</Link>
            </li>
            <li className="nav__link">
              <Link to="/about">about</Link>
            </li>
            <li className="nav__link">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
