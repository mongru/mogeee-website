import React from 'react';
import Carousel from 'nuka-carousel';

class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="hero__container">
          <h1 className="hero__heading">I will make your heart <span className="hero__emphasis">jump.</span></h1>
          <p className="hero__text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
        </div>
        <Carousel cellSpacing={20} cellAlign="center">
          <div className="carousel__item" />
          <div className="carousel__item" />
          <div className="carousel__item" />
          {/* <div className="carousel__item"><img className="carousel__img" src="https://placeimg.com/1000/680/people/grayscale" alt="" /></div>
          <div className="carousel__item"><img className="carousel__img" src="https://placeimg.com/1000/680/tech/grayscale" alt="" /></div>
          <div className="carousel__item"><img className="carousel__img" src="https://placeimg.com/1000/680/any/grayscale" alt="" /></div>
          <div className="carousel__item"><img className="carousel__img" src="https://placeimg.com/1000/680/architecture/grayscale" alt="" /></div>
          <div className="carousel__item"><img className="carousel__img" src="https://placeimg.com/1000/680/nature/grayscale" alt="" /></div>
          <div className="carousel__item"><img className="carousel__img" src="https://placeimg.com/1000/680/animals/grayscale" alt="" /></div> */}
        </Carousel>
      </section>
    );
  }
}

export default Hero;
