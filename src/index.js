import React from 'react';
import PropTypes from 'prop-types';

/**
 * Random Selection Component
 *
 * E.g.:
 * ```html
 * <ReactRoller fps={ 60 } duration={ 2000 } list={ [1, 2, 3, 4, 5, 6] } />
 * ```
 */
class RandomRoller extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: props.message || "Click to Pick",
      interval: null
    };

    this.pickItem = this.pickItem.bind(this);
  }

  componentDidMount(){
    if(this.props.auto){
      this.pickItem()
    }
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
       spin(startTime, this.props.duration);
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
  /**
   * Custom css class for the component
   */
  className: PropTypes.string,
  /**
   * Frames per second the item should be animating at
   */
  fps: PropTypes.number,
  /**
   * Amount of time the animation should last in milliseconds
   */
  duration: PropTypes.number,
  /**
   * List of items to select from
   */
  list: PropTypes.array.isRequired,
}

RandomRoller.defaultProps = {
  className: '',
  fps: 60,
  duration: 2000,
}

export default RandomRoller;

