import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Nav from '../components/Nav';
import Work from '../components/Work';
import WorkDetail from '../components/WorkDetail';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const Root = () => {
  return (
    <Router>
      <div className="container__wrapper">
        <Nav />
        <Switch>
          <Route path="/work/:id" component={WorkDetail} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={App} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default Root;
