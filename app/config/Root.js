import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import visibilityFilter from '../reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Nav from '../components/Nav';
import VisibleWorkItems from '../containers/VisibleWorkItems';
import Work from '../components/Work';
import WorkDetail from '../components/WorkDetail';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const store = createStore(visibilityFilter);


const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container__wrapper">
          <Nav />
          <Switch>
            <Route path="/work/:id" component={WorkDetail} />
            <Route path="/work" component={VisibleWorkItems} />
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

export default Root;
