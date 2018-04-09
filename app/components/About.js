import React from 'react';
import Draggable from 'react-draggable';

class About extends React.Component {
  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };
  render() {
    return (
      <div className="about__container">
        <div className="about__container-half--light">
          <p className="about__description">
            Hello! My name is Monika and I'm a creative professional who discovered the joys of coding.
          </p>
          <span className="about__note">This website is still being actively developed, so please excuse any surprises. If you see any bugs, <a className="about__link" href="mailto:monika.grubizna@gmail.com?Subject=Hello%20bug" target="_top">please get in touch and let me know. </a>
  I will remain forever grateful and e-mail you a thank you drawing along with <a href="https://www.youtube.com/watch?v=L03obaDDNiA" target="_blank" rel="noopener noreferrer">this good doggo clip ♡ ʕ•ᴥ•ʔ ♡</a></span>
        </div>
        <div className="about__container-half">
          <div className="about__dragabble">
            <Draggable
              handle=".about__puzzle"
              axis="y"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              onStart={this.handleStart}
              onDrag={this.handleDrag}
              onStop={this.handleStop}
              bounds="parent"
            >
              <div>
                <div className="about__puzzle">drag stripes ⬆ or ⬇ to move the blinds</div>
              </div>
            </Draggable>
            <Draggable
              handle=".about__puzzle"
              axis="y"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              onStart={this.handleStart}
              onDrag={this.handleDrag}
              onStop={this.handleStop}
              bounds="parent"
            >
              <div>
                <div className="about__puzzle about__puzzle--dark"></div>
              </div>
            </Draggable>
            <Draggable
              handle=".about__puzzle"
              axis="y"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              onStart={this.handleStart}
              onDrag={this.handleDrag}
              onStop={this.handleStop}
              bounds="parent"
            >
              <div>
                <div className="about__puzzle about__puzzle"></div>
              </div>
            </Draggable>
            <Draggable
              handle=".about__puzzle"
              axis="y"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              onStart={this.handleStart}
              onDrag={this.handleDrag}
              onStop={this.handleStop}
              bounds="parent"
            >
              <div>
                <div className="about__puzzle about__puzzle--white"></div>
              </div>
            </Draggable>
            <Draggable
              handle=".about__puzzle"
              axis="y"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              onStart={this.handleStart}
              onDrag={this.handleDrag}
              onStop={this.handleStop}
              bounds="parent"
            >
            <div>
              <div className="about__puzzle about__puzzle--red"></div>
            </div>
          </Draggable>

          {/* <Draggable
            handle=".about__puzzle"
            axis="y"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
            bounds="parent"
          >
            <div>
              <div className="about__puzzle"></div>
            </div>
          </Draggable> */}
          {/* <Draggable
            handle=".about__puzzle"
            axis="y"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
            bounds="parent"
          >
            <div>
              <div className="about__puzzle about__puzzle--dark"></div>
            </div>
          </Draggable>
          <Draggable
            handle=".about__puzzle"
            axis="y"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
            bounds="parent"
          >
            <div>
              <div className="about__puzzle about__puzzle--blue"></div>
            </div>
          </Draggable>
          <Draggable
            handle=".about__puzzle"
            axis="y"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
            bounds="parent"
          >
            <div>
              <div className="about__puzzle about__puzzle--white"></div>
            </div>
          </Draggable> */}
        </div>
      </div>
    </div>
  );
  }
}

export default About;
