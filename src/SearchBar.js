import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }
    }


    onInputChange(term) {
        this.setState({term});
        this.props.onSearchOnchanged(term);
    }



    render() {
        return (
            <div className='search'>
                <input 
                value={this.state.term} 
                onChange={(e) => this.onInputChange(e.target.value)}></input>
            </div>
        );
    }
}

export default SearchBar;

