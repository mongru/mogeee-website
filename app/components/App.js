import React from 'react';
import Draggable from 'react-draggable';


class App extends React.Component {
  render() {
    return (
      <div>
        <Draggable
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[100, 100]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          <div>
            <div className="handle" style={{ height: '300px', backgroundColor: 'blue' }}>Drag from here</div>
          </div>
        </Draggable>
        <main>
          <div className="main__container">
            <section className="main__hero">MAIN HERO</section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
