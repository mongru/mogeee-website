import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import HeroButton from './HeroButton';


class Hero extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     width:  1200,
  //     height: 800
  //   }
  // }

  /**
   * Calculate & Update state of new dimensions
   */
  // updateDimensions() {
  //   if(window.innerWidth < 500) {
  //     this.setState({ width: 450, height: 102 });
  //   } else {
  //     let update_width  = window.innerWidth-100;
  //     let update_height = Math.round(update_width/4.4);
  //     this.setState({ width: update_width, height: update_height });
  //   }
  // }

  /**
   * Add event listener
   */
  // componentDidMount() {
  //   this.updateDimensions();
  //   window.addEventListener("resize", this.updateDimensions.bind(this));
  // }

  /**
   * Remove event listener
   */
  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateDimensions.bind(this));
  // }

  render() {
    return (
      <section className="hero">
        <div className="hero__container">
          <Fade>
            {/* <img className="hero__img" src="../vendors/img/hero.png" alt="" /> */}
            <img className="hero__img" src="../vendors/img/hero_img.png" alt="" />
          </Fade>
          <Bounce>
            <Link to="/work" className="hero__link">
              <HeroButton>
                <p className="hero__link">check what i can do</p>
              </HeroButton>
            </Link>
          </Bounce>
        </div>
      </section>
    );
  }
}

export default Hero;
