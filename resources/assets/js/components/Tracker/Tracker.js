import React, { Component } from 'react';

import Chronometer from './Chronometer';
import Controllers from './Controllers';
import Description from './Description';

export default class App extends Component {

    constructor() {
        super();
        this.descriptionComp = React.createRef();
        this.state = {
            totalSeconds: 0, // total of seconds of the tracker
            interval: {},
            running: false, // defines if tracker is running to prevent set interval multiple times
            editTracker: false, // status to define if tracker should be edited            
            
            task_time: "00:00:00", // total time
            started: "",    // started datetime
            finished: "",   // finished datetime
            description: "", 
        }
    }

    render(){
        return (
            <div className="row" style={{width: '100%'}} >
                <div className="card">                            
                    <div className="card-body">
                        <div className="col-md-6 float-right">
                            <Description 
                                ref={this.descriptionComp}
                                description={this.state.description}
                                descriptionUpdate={this.descriptionUpdate.bind(this)}
                            />
                        </div>  
                        <div className="col-md-6">
                            <Chronometer 
                                editTracker={this.state.editTracker}
                                timeText={this.state.task_time}
                                timeTextUpdate={this.timeTextUpdate.bind(this)}
                                updateSecondsFromText={this.updateSecondsFromText.bind(this)}
                            />                            
                            <Controllers 
                                startTracker={this.startTracker.bind(this)}
                                pauseTracker={this.pauseTracker.bind(this)}
                                resetTracker={this.resetTracker.bind(this)}
                                toogleTrackerInput={this.toogleTrackerInput.bind(this)}
                            />
                            <div className="col-md-12">
                                <div className="text-center">
                                    <button className="btn btn-primary" onClick={this.submitTask.bind(this)}>Finish Task</button>
                                </div>                            
                            </div>
                        </div>                                              
                    </div>
                </div>
            </div>
        );
    }

    submitTask() {
        this.pauseTracker();
        let $this = this;
        let formData = {
            task_time: this.state.task_time,
            description: this.state.description,
            started: this.state.started,
            finished: new Date().toISOString().slice(0, 19).replace('T', ' '),
        }

        axios.post('/api/tasks', formData).then(resp => {
            this.cleanTaskData();            
            $this.props.addItemToTasks(resp.data);
        }).catch(err => {
            console.log(err);
        });
    }

    cleanTaskData(){
        let $this = this;
        this.setState({
            totalSeconds: 0, 
            interval: {},
            running: false, 
            editTracker: false, 
            
            task_time: "00:00:00",
            started: "",
            finished: "",
            description: "",
        }, () => {
            this.clearTextArea();
        });
    }
    // use refs to access Description to clear text area
    clearTextArea(){
        this.descriptionComp.current.clearTextArea();
    }

    timeTextUpdate(value){
        this.setState({
            task_time: value,
        });
    }

    descriptionUpdate(value){
        this.setState({
            description: value,
        });
    }
    
    // get the total amount of seconds based on the text
    updateSecondsFromText() {
        let {task_time} = this.state;

        let hours = task_time.substr(0,2);
        let minutes = task_time.substr(3,2);
        let seconds = task_time.substr(6,2);

        let totalSeconds = ((Number(hours)*3600) + (Number(minutes)*60) + (Number(seconds)));
        this.setState({
            totalSeconds: totalSeconds,
            running: false
        });
    }
    // convert the seconds to the tracker string
    getTime(){
        let {totalSeconds} = this.state;

        var seconds = totalSeconds % 60;
        totalSeconds = (totalSeconds - seconds) / 60;
        var minutes = totalSeconds % 60;
        var hours = (totalSeconds - minutes) / 60;

        return ("0"+hours).slice(-2) + ':' + ("0"+minutes).slice(-2) + ':' + ("0"+seconds).slice(-2);
    }

    toogleTrackerInput() {
        let $this = this;
        this.pauseTracker();
        this.setState({
            editTracker: !$this.state.editTracker,
        });
    }
    // initializes the tracker
    startTracker(){
        let $this = this;
        if(!this.state.running){
            this.setState({ started: new Date().toISOString().slice(0, 19).replace('T', ' ') })
            this.state.interval = setInterval(function(){
                $this.setState({
                    totalSeconds: ($this.state.totalSeconds + 1),
                    running: true,
                    task_time: $this.getTime(),
                });
            }, 1000);
        }        
    }
    // pauses the tracker
    pauseTracker(){
        clearInterval(this.state.interval);
        this.setState({
            running: false
        });
    }
    // restarts the tracker
    resetTracker(){
        clearInterval(this.state.interval);
        this.setState({
            totalSeconds: 0,
            running: false,
            task_time: "00:00:00",
        });
    }
    
}