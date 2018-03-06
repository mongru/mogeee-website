import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from '../components/App';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';


const Root = () => {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <ul className="navigation__links">
            <li className="navigation__link">
              <Link to="/">
                <div className="logo__container">
                  <img src="../vendors/img/logo.svg" alt="mogeee logo" />
                </div>
              </Link>
            </li>
            <li className="navigation__link">
              <Link to="/work">Work</Link>
            </li>
            <li className="navigation__link">
              <Link to="/about">About</Link>
            </li>
            <li className="navigation__link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" component={App} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default Root;
