import React from 'react';
import PropTypes from 'prop-types';

const HeroButton = ({ children }) => {
  return (
    <button className="hero__btn"> {children} </button>
  );
};

HeroButton.proptypes = {
  children: PropTypes.node,
};

export default HeroButton;
