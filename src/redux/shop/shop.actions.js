import ShopActionTypes from './shop.types';

export const updateSearchTerm = value => ({
    type: ShopActionTypes.UPDATE_SEARCH_TERM,
    payload: value
});