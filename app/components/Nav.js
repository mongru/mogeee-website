import React from 'react';
import { Link } from 'react-router-dom';
import NavMobile from './NavMobile';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
      this.setState({windowWidth: window.innerWidth});
  }

  renderNavigation() {
    if(this.state.windowWidth <= 768) {
        return (
          <NavMobile mobileNavVisible={this.props.mobileNavVisible} />
        );
    } else {
        return  this.renderNavigationLinks()
    }
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

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <Link to="/" className="nav__logo__link">
            <div className="nav__logo__container">
              <img className="nav__logo" src="../vendors/img/logo_mogeee.svg" alt="mogeee logo" />
              {/* <h1 className="nav__logo">mogeee</h1> */}
            </div>
          </Link>
          { this.renderNavigation() }
        </div>
      </nav>
    );
  }
}

export default Nav;
