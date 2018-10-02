import React, { Component } from 'react';

export default class Chronometer extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div className="text-center">
                {this.trackingTimer()}
            </div>
        );
    }
    // updates the text in the outer component
    handleInputTimerChange(e){
        this.props.timeTextUpdate(e.target.value);
    }
    // decides based on editTracker whick view is gonna be shown
    trackingTimer() {
        if(!this.props.editTracker){
            return <h1>{this.props.timeText}</h1>
        } else {            
            return (
                <input type="text" id="time" 
                    value={this.props.timeText} 
                    onBlur={this.props.updateSecondsFromText} 
                    onChange={e => this.handleInputTimerChange(e)} 
                />
            );            
        }
    }    

}