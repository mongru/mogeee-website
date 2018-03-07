import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';
import Nav from '../components/Nav';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';


const Root = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" component={App} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default Root;
