import React from "react";
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date()
      });
    }
    render() {
      return (
        <>
          {this.state.time.getHours() + ':' + this.state.time.getMinutes() + ":" + this.state.time.getSeconds()}
        </>
      );
    }
  }

export default Clock;