import React from 'react';
import Draggable from 'react-draggable';

class Work extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Work;
