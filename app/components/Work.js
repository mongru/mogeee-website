import React from 'react';
// import Draggable from 'react-draggable';

class Work extends React.Component {
  // filterImgs() {
  //
  // }
  render() {
    return (
      <div className="work__wrapper">
        <section className="gallery">
          <div className="gallery__container">
            <div className="gallery__item gallery__item--dark" data-tag="design">
              {/* <img src="http://placehold.it/400x400" className="responsive-image" alt="" /> */}
            </div>
            <div className="gallery__item" data-tag="dev">
              {/* <img src="http://placehold.it/400x400" className="responsive-image" alt="" /> */}
            </div>
            <div className="gallery__item gallery__item--dark" data-tag="design">
              {/* <img src="http://placehold.it/400x400" className="responsive-image" alt="" /> */}
            </div>
            <div className="gallery__item" data-tag="dev">
              {/* <img src="http://placehold.it/400x400" className="responsive-image" alt="" /> */}
            </div>
            <div className="gallery__item gallery__item--dark" data-tag="design">
              {/* <img src="http://placehold.it/400x400" className="responsive-image" alt="" /> */}
            </div>
            <div className="gallery__item" data-tag="dev">
              {/* <img src="http://placehold.it/400x400" className="responsive-image" alt="" /> */}
            </div>
          </div>
        </section>
        <aside>
          FILTER
          <button id="designBtn">design</button>
          <button id="devButton">development</button>
        </aside>
      </div>
    );
  }
}

export default Work;
