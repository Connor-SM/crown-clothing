import React from 'react';
import { connect } from 'react-redux';
import { searchItems } from '../../redux/shop/shop.actions';

import './search-bar.styles.scss';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        };
    }

    updateSearch = (e) => {
        const { searchItems } = this.props;
        
        this.setState({ searchTerm: e.target.value }, () => {
            searchItems(this.state.searchTerm);
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

const mapDispatchToProps = dispatch => ({
    searchItems: (value) => dispatch(searchItems(value))
});

export default connect(null, mapDispatchToProps)(SearchBar);