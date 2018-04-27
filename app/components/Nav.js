import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavMobile from './NavMobile';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false,
    };
    this.handleResize = this.handleResize.bind(this);
    this.renderNavigation = this.renderNavigation.bind(this);
    this.renderNavigationLinks = this.renderNavigationLinks.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  renderNavigation() {
    if (this.state.windowWidth <= 768) {
      return (
        <NavMobile mobileNavVisible={this.props.mobileNavVisible} />
      );
    }
    return this.renderNavigationLinks();
  }

  renderNavigationLinks() {
    return (
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
    );
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <Link to="/" className="nav__logo__link">
            <div className="nav__logo__container">
              <img className="nav__logo" src="../vendors/img/logo_mogeee.svg" alt="mogeee logo" />
            </div>
          </Link>
          { this.renderNavigation() }
        </div>
      </nav>
    );
  }
}

Nav.proptypes = {
  mobileNavVisible: PropTypes.bool.isRequired,
};

export default Nav;
