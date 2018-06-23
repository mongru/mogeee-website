import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
// import Loadable from 'react-loadable';
// import path from 'path';
import RubberBand from 'react-reveal/RubberBand';
import HeroButton from './HeroButton';

// import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

// const Hero = Loadable({
//   loader: () => import('./HeroButton'),
//   loading: Loading,
// });

// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }
// let LoadableExample = Loadable({
//   loader: () => fakeDelay(400).then(() => import('./Hero')),
//   LoadingComponent: HeroButton,
//   serverSideRequirePath: path.resolve(__dirname, './Hero')
// });
//
// export default function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <LoadableExample/>
//     </div>
//   );
// }


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <Fade>
          <img className="hero__img" src="../vendors/img/hero_img.png" alt="mogeee hero" />
        </Fade>
        <RubberBand>
          <Link to="/work" className="hero__link">
            <HeroButton>
              <p className="hero__link">check what i can do</p>
            </HeroButton>
          </Link>
        </RubberBand>
      </div>
    </section>
  );
};

export default Hero;
