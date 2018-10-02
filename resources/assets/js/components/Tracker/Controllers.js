import React, { Component } from 'react';

export default class Controllers extends Component {    

    render(){
        return (
            <div className="text-center">
                <button className="btn btn-success" onClick={this.props.startTracker}>Start/Resume</button>
                <button className="btn btn-warning" onClick={this.props.pauseTracker}>Pause</button>
                <button className="btn btn-danger"  onClick={this.props.resetTracker}>Reset</button>
                <button className="btn btn-primary" onClick={this.props.toogleTrackerInput}>Edit</button>
            </div>
        );
    }
}