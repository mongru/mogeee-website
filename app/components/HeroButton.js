import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/prop-types */
const HeroButton = ({ children }) => {
  return (
    <button className="hero__btn"> {children} </button>
  );
};

HeroButton.proptypes = {
  children: PropTypes.node.isRequired,
};

export default HeroButton;
