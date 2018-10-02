import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Tracker from './Tracker/Tracker';
import TrackersList from './Tracker/TrackersList';
import TrackerFilters from './Tracker/TrackerFilters';

export default class App extends Component { 

    constructor() {
        super()
        this.state = {
            filter_from: "",
            filter_to: "",
            tasks: [],
        }
    }

    render() {
        return (            
            <div className="container">
                <Tracker addItemToTasks={this.addItemToTasks.bind(this)} />
                <TrackerFilters 
                    filter_from={this.state.filter_from}
                    filter_to={this.state.filter_to}
                    formFromUpdate={this.formFromUpdate.bind(this)}
                    formToUpdate={this.formToUpdate.bind(this)}
                />
                <TrackersList tasks={this.state.tasks} />
            </div>
        );
    }

    componentWillMount(){
        this.updateList();
    }

    updateList(){
        let $this = this;

        axios.get('/api/tasks', {
            params: {
                filter_from: $this.state.filter_from,
                filter_to: $this.state.filter_to,
            }
        }).then(resp => {
            $this.setState({
                tasks: resp.data
            });
        }).catch(err => {
            console.log(err);
        })
    }

    addItemToTasks(newTask){
        this.updateList();
    }

    formFromUpdate(value){
        this.setState({
            filter_from: value,            
        }, () => {
            this.updateList()
        });
    }
    formToUpdate(value){
        this.setState({
            filter_to: value,
        }, () => {
            this.updateList()
        });        
    }
    
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
