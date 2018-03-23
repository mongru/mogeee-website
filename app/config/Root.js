import React from 'react';
// import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Nav from '../components/Nav';
import Work from '../components/Work';
import WorkDetail from '../components/WorkDetail';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

// Root.propTypes = {
//   store: PropTypes.object.isRequired
// }

export default Root;
