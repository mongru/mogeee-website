import React from 'react';
import Hero from './Hero';

// import Loadable from 'react-loadable';
// import Loader from './Loader';
//
// const LoadableHero = Loadable({
//   loader: () => import('./Hero'),
//   loading: Loader,
// });

const App = () => {
  return (
    <main>
      <Hero />
    </main>
  );
};

export default App;
