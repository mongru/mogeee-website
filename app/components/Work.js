import React from 'react';
// import Draggable from 'react-draggable';

class Work extends React.Component {
  render() {
    return (
      <div>
        <section className="gallery">
          <div className="gallery__container">
            <div className="gallery__item">
              <img src="http://placehold.it/400x400" className="responsive-image" alt="" />
            </div>
            <div className="gallery__item">
              <img src="http://placehold.it/400x400" className="responsive-image" alt="" />
            </div>
            <div className="gallery__item">
              <img src="http://placehold.it/400x400" className="responsive-image" alt="" />
            </div>
            <div className="gallery__item">
              <img src="http://placehold.it/400x400" className="responsive-image" alt="" />
            </div>
            <div className="gallery__item">
              <img src="http://placehold.it/400x400" className="responsive-image" alt="" />
            </div>
            <div className="gallery__item">
              <img src="http://placehold.it/400x400" className="responsive-image" alt="" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Work;
