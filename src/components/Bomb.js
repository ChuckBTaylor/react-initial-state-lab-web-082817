import React from 'react';
import PropTypes from 'prop-types';

class Bomb extends React.Component{
  constructor(props){
    super(props);
    this.state = {secondsLeft: props.initialCount}
  }

  render(){
    return(
      <div>
        {this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!"}
      </div>
    )
  }
}

Bomb.defaultProps = {

}

Bomb.propTypes = {
  secondsLeft: PropTypes.number
}

export default Bomb;
