import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        //.bind sets the this of that function to whatever is passed in as argument
        //it's good to use when doing callback when the this keyword isn't what you want it to be
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
