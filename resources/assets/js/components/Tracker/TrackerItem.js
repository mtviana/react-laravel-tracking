import React, { Component } from 'react';

export default class TrackerItem extends Component {

    constructor() {
        super();
    }

    render(){
        let { task } = this.props;
        return (
            <tr>
                <td>{task.id}</td>
                <td>{task.task_time}</td>
                <td>{task.started}</td>
                <td>{task.finished}</td>
                <td>{task.description}</td>
            </tr>            
        );
    }
}