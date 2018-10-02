import React, { Component } from 'react';

export default class TrackerFilters extends Component {

    render(){
        return (
            <div className="row">
                <div className="card">                            
                    <div className="card-body">
                        <h3>Filters</h3>
                        <div className="form-inline">
                            <div className="form-group">
                                <label>From: </label>
                                <input type="date" className="form-control" value={this.props.filter_from} onChange={e => this.formFromUpdate(e)} />
                            </div>
                            <div className="form-group">
                                <label>To: </label>
                                <input type="date" className="form-control" value={this.props.filter_to} onChange={e => this.formToUpdate(e)}/>
                            </div>
                            <div className="form-group">
                                <label>Description: </label>
                                <input type="text" className="form-control" value={this.props.filter_description} onChange={e => this.formDescriptionUpdate(e)}/>
                            </div>
                        </div>                                  
                    </div>
                </div>
            </div>
        );
    }

    // updates the text in the outer component
    descriptionUpdate(e) {
        this.props.descriptionUpdate(e.target.value);
    }

    formFromUpdate(e) {
        this.props.formFromUpdate(e.target.value);
    }
    formToUpdate(e) {
        this.props.formToUpdate(e.target.value);
    }
    formDescriptionUpdate(e){
        this.props.formDescriptionUpdate(e.target.value);
    }
}