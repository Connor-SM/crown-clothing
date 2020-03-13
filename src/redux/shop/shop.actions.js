import ShopActionTypes from './shop.types';

export const searchItems = value => ({
    type: ShopActionTypes.SEARCH_ITEMS,
    payload: value
});