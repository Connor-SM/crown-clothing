import React from 'react';
import { connect } from 'react-redux';
import { updateSearchTerm } from '../../redux/shop/shop.actions';
import { selectSearchTerm } from '../../redux/shop/shop.selector';

import './search-bar.styles.scss';

const SearchBar = ({ searchTerm, updateSearchTerm }) => (
    <div className='search-bar'>
        <input value={searchTerm} onChange={e => updateSearchTerm(e.target.value)} />
    </div>
);

const mapStateToProps = (state) => ({
    searchTerm: selectSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
    updateSearchTerm: (value) => dispatch(updateSearchTerm(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);