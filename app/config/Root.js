import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import visibilityFilter from '../reducers';
import App from '../components/App';
import Nav from '../components/Nav';
import VisibleWorkItems from '../containers/VisibleWorkItems';
import ScrollToTopRoute from '../components/ScrollToTop';
// import Work from '../components/Work';
import WorkDetail from '../components/WorkDetail';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const store = createStore(visibilityFilter);


const Root = () => {
  return (
    <Provider store={store}>
      <Router>
          <div className="main__wrapper">
            <Nav />
            {/* <Switch>
              <Route path="/work/:id" component={WorkDetail} />
              <Route path="/work" component={VisibleWorkItems} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={App} />
            </Switch> */}
            <Switch>
              <ScrollToTopRoute path="/work" component={VisibleWorkItems} />
              <ScrollToTopRoute path="/about" component={About} />
              <ScrollToTopRoute path="/contact" component={Contact} />
              <ScrollToTopRoute path="/" component={App} />
            </Switch>
            <Footer />
          </div>
      </Router>
    </Provider>
  );
};

export default Root;
