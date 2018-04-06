import React from 'react';
import Draggable from 'react-draggable';

class About extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
            <section className="main__about">ABOUT</section>
            <div className="handle" style={{ height: '300px', backgroundColor: 'lightblue' }}>Drag from here</div>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default About;
