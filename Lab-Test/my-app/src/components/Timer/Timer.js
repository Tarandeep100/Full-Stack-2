import React from "react";
import Moment from "react-moment";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();
    this.state = {
      currentTime: today,
    };
  }

  render() {
    return (
        <>
            <Moment date={this.state.currentTime} format="hh:mm:ss" />
        </>
    );
    
  }
}

export default Timer;
