import React from "react";
import Clock from "../Clock/Clock";
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    state = {
        startTime: '',
        stopTime: '',
        timerLog: [],
        duration: {},
        start:'',
        showClock: false,
    }

    handleStart(){
        console.log("start time!")
        let now = new Date();
        this.setState({
            startTime: now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(),
            start: now,
        });
    }

    handleStop(){
        console.log("stop time!")
        let now = new Date();
        let val = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
        let delta = now - this.state.start;
        // console.log("delta:",delta);
        let seconds = Math.floor(delta/1000);
        let mins = Math.floor(seconds/60);
        seconds = seconds - (mins * 60);
        this.setState({
            stopTime: val,
            duration: {mins, seconds},
            timerLog: [...this.state.timerLog, {mins, seconds}],
            showClock: true,
        });
    }

    handleReset(){
        console.log("Reset Time!")
        this.setState({
            startTime: '',
            stopTime: '',
            duration: {},
            timerLog: [],
            showClock: false,
        })
    }
    render() { 
        // console.log("Timer Render!");
        return ( 
            <div>
        <table>
            <tbody>
                <tr>
                    <td>
                        <span>Start Time:</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="txtStartTime" type="text"  value={this.state.startTime} style={{height: '25px', width:'100px'}}  readOnly /> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>End Time:</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="txtEndTime" type="text" value={this.state.stopTime} style={{height: '25px', width:'100px'}} readOnly/>
                    </td>
                </tr>
                <tr>
                    <td>
                    {this.state.showClock ? <Clock/> : null}
                    </td>
                </tr>
      
                <tr>
                    <td>
                        <button id="btnStart" type="button" style={{height: '25px', width:'100px'}} onClick={this.handleStart} >Start</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button id="btnStop" type="button" style={{height: '25px', width:'100px'}} onClick={this.handleStop} >Stop</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button id="btnReset" type="button" style={{height: '25px', width:'100px'}} onClick={this.handleReset}>Reset</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <ul>
        {this.state.timerLog.map(item => {
         return <li> {"Duration => minutes: " + item.mins + " seconds: "+ item.seconds}</li>
        })}
      </ul>
    </div>
         );
    }
}
 
export default Timer;