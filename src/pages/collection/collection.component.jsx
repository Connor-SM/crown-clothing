import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection, selectSearchTerm } from '../../redux/shop/shop.selector';
import SearchBar from '../../components/search-bar/search-bar.component';

import './collection.styles.scss';

const CollectionPage = ({ collection, searchTerm }) => {
    const { title, items } = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{ title }</h2>
            <SearchBar />
            <div className='items'>
                {
                    items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    searchTerm: selectSearchTerm(state)
});

export default connect(mapStateToProps)(CollectionPage);