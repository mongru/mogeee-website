import React from 'react';
import Draggable from 'react-draggable';

class Work extends React.Component {
  render() {
    return (
      <div>
        <Draggable
          axis="y"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          <div>
            <div>WORK</div>
            <div className="handle" style={{ height: '300px', backgroundColor: 'turquoise' }}>Drag from here</div>
          </div>
        </Draggable>
        <section className="gallery">
          <div className="container">
            <div className="row">
              <div className="col-12">Hello img</div>
            </div>
          </div>
          <div className="gallery__item">Gallery item</div>
        </section>
      </div>
    );
  }
}

export default Work;
