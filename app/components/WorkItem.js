import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WorkItem extends Component {
  render() {
    const { title, description, img, tags } = this.props;

    const style = {
      height: '400px',
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    };

    return (
      <div style={style}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{tags}</p>
      </div>
    );
  }
}

WorkItem.proptypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.node,
  tags: PropTypes.node,
};

export default WorkItem;
