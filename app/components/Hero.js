import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';
import HeroButton from './HeroButton';


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
