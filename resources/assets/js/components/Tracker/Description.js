import React, { Component } from 'react';

export default class Description extends Component {
    render(){
        return (
            <div>
                <div className="text-center">
                    <label>Description</label>   
                </div>
                <div className="text-center">
                    <textarea 
                        ref="text_description" 
                        className="form-control"
                        rows="4" cols="400" maxLength="4000"
                        defaultValue={this.props.description}
                        onChange={e => this.descriptionUpdate(e)}
                    ></textarea>
                </div>
            </div>            
        );
    }

    // updates the text in the outer component
    descriptionUpdate(e) {
        this.props.descriptionUpdate(e.target.value);
    }

    clearTextArea(){
        this.refs.text_description.value = ""
    }
}