import React from 'react';
import Carousel from 'nuka-carousel';

class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        {/* <div className="hero__container">
          <h1 className="hero__heading">I will make your heart
          <span className="hero__emphasis">jump.</span>
          </h1>
          <p className="hero__text">Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt </p>
        </div> */}
        <div className="carousel__container">
          <Carousel cellSpacing={20} cellAlign="center" autoplay autoplayInterval="1000" swiping>
            <div className="carousel__item">
              <h1 className="carousel__heading">I will make your heart
                <span className="hero__emphasis">jump.</span>
              </h1>
              <p className="carousel__text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              </p>
              <img className="carousel__img" src="../vendors/img/business_cards_1x.png" alt="" />
            </div>
            <div className="carousel__item">
              <h1 className="carousel__heading">I make your heart
                <span className="hero__emphasis">jump.</span>
              </h1>
              <p className="carousel__text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              </p>
              <img className="carousel__img" src="../vendors/img/business_cards_1x.png" alt="" />
            </div>
            <div className="carousel__item">
              <h1 className="carousel__heading">I your heart
                <span className="hero__emphasis">jump.</span>
              </h1>
              <p className="carousel__text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              </p>
              <img className="carousel__img" src="../vendors/img/business_cards_1x.png" alt="" />
            </div>
            {/* <div className="carousel__item"><img className="carousel__img" src="https://placeimg.com/1000/680/people/grayscale" alt="" /></div>
            <div className="carousel__item"><img className="carousel__img" src="https://placeimg.com/1000/680/tech/grayscale" alt="" /></div>
            <div className="carousel__item"><img className="carousel__img" src="https://placeimg.com/1000/680/any/grayscale" alt="" /></div>
            <div className="carousel__item"><img className="carousel__img" src="https://placeimg.com/1000/680/architecture/grayscale" alt="" /></div>
            <div className="carousel__item"><img className="carousel__img" src="https://placeimg.com/1000/680/nature/grayscale" alt="" /></div>
            <div className="carousel__item"><img className="carousel__img" src="https://placeimg.com/1000/680/animals/grayscale" alt="" /></div> */}
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Hero;
