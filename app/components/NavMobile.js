import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

class NavMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mobileNavVisible: false,
      subMenuOpen: false,
    };
  }

  handleClick() {
  	this.setState({
  		open: !this.state.open,
      mobileNavVisible: !this.state.mobileNavVisible,
      subMenuOpen: !this.state.subMenuOpen,
  	});
  }

  renderMobileNav() {
    return (
      <nav className="nav-mobile">
        <ul className="nav-mobile__links">
          <li className="nav-mobile__link">
            <Link to="/work" onClick={this.handleClick.bind(this)}>work</Link>
          </li>
          <li className="nav-mobile__link">
            <Link to="/about" onClick={this.handleClick.bind(this)}>about</Link>
          </li>
          <li className="nav-mobile__link">
            <Link to="/contact" onClick={this.handleClick.bind(this)}>contact</Link>
          </li>
        </ul>
      </nav>
    );
  }

  render() {

    const { open, mobileNavVisible, subMenuOpen } = this.state;

    return (
        <div className="nav-mobile__wrapper">
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={18}
            height={15}
            strokeWidth={2}
            rotate={0}
            color='darkblue'
            borderRadius={0}
            animationDuration={0.5}
          />
          { open && mobileNavVisible && subMenuOpen ? this.renderMobileNav() : '' }
        </div>
    );
  }
}


export default NavMobile;
