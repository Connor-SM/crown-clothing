import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: SHOP_DATA,
    searchTerm: ''
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            }
        default:
            return state;
    }
};

export default shopReducer;