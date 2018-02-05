import React from 'react';
import PropTypes from 'prop-types';

class RandomRoller extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: "Click to Pick",
      interval: null
    };

    this.pickItem = this.pickItem.bind(this);
  }

  pickItem() {
    const { list = [] } = this.props;

    let startTime;

    let fps = this.props.fps;
    let now;
    let then = Date.now();
    let interval = 1000 / fps;
    let delta;

    const spin = (timestamp, duration) => {

      timestamp = timestamp || new Date().getTime();

      let runTime = timestamp - startTime;
      let progress = runTime / duration;

      progress = Math.min(progress, 1);

      // check if run time is met
      if (runTime < duration) {
          requestAnimationFrame((timestamp) => {
              spin(timestamp, duration);
          });
      }

      now = Date.now();
      delta = now - then;

      if (delta > interval) {
        then = now - (delta % interval);

        this.setState({ item: list[Math.floor(Math.random() * list.length)] });
      }
    }

    requestAnimationFrame((timestamp) => {
       startTime = timestamp || new Date().getTime();
       spin(startTime, this.props.spinTime);
    });
  }

  render() {
    return (
      <div className={this.props.className} onClick={this.pickItem}>
        {this.state.item}
      </div>
    );
  }
}

RandomRoller.propTypes = {
  className: PropTypes.string,
  fps: PropTypes.number,
  spinTime: PropTypes.number,
  list: PropTypes.array,
}

export default RandomRoller;

