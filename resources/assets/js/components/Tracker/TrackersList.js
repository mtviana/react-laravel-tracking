import React, { Component } from 'react';

import TrackerItem from './TrackerItem';

export default class TrackersList extends Component {

    render(){
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="card">                            
                        <div className="card-body">
                            <h3>List of tasks</h3>

                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Time</th>
                                        <th>Started</th>
                                        <th>Finished</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.tasks.map((task, i) => (
                                        <TrackerItem task={task} key={i} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
    
}