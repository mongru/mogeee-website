import React from 'react';

const HeroButton = ({ children }) => {
  return (
    <button className="hero__btn"> {children} </button>
  );
}

export default HeroButton;
