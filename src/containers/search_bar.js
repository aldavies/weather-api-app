import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        //.bind sets the this of that function to whatever is passed in as argument
        //it's good to use when doing callback when the this keyword isn't what you want it to be
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();

        // Should go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)

// How does connect work? If a component is specified, the component will subscribe to 
// to redux store updates. 
//mapStateToProps has two parameters, first is store state, second is props passed to the connected component
//can return function in mapStateToProps for memoization (performance increase due to storing results of expensive calls)
// mapDispatchToProps: if an object is passed, each function inside is assumed to be an action creator
