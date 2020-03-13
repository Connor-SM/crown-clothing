import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';
import { searchForItems } from './shop.utils';

const INITIAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.SEARCH_ITEMS:
            return {
                ...state,
                collections: searchForItems(state.collections, action.payload)
            }
        default:
            return state;
    }
};

export default shopReducer;