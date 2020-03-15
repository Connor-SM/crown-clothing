import React from 'react';

import './search-bar.styles.scss';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        };
    }

    updateSearch = (e) => {       
        this.setState({ searchTerm: e.target.value }, () => {
            console.log(this.state.searchTerm);
        });
    }

    render() {
        return (
            <div className='search-bar'>
                <input onChange={e => this.updateSearch(e)} />
            </div>
        );
    }
};

export default SearchBar;