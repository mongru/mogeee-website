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
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Route path="/" component={App} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default Root;
