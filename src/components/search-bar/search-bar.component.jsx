import React from 'react';
import { connect } from 'react-redux';
import { updateSearchTerm } from '../../redux/shop/shop.actions';
import { selectSearchTerm } from '../../redux/shop/shop.selector';
import FormInput from '../form-input/form-input.component';

import './search-bar.styles.scss';

const SearchBar = ({ searchTerm, updateSearchTerm }) => (
    <div className='search-bar'>
        <FormInput
            name='search' 
            type='text' 
            value={searchTerm}
            handleChange={e => updateSearchTerm(e.target.value)}
            label='search'
        />
    </div>
);

const mapStateToProps = (state) => ({
    searchTerm: selectSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
    updateSearchTerm: (value) => dispatch(updateSearchTerm(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);