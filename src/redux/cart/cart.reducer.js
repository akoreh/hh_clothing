import cartActionTypes from './cart.types';

const INITIAL_STATE = {
    dropdownHidden: true
};

const cartReducer = (state =  INITIAL_STATE, action) => {
    switch(action.type) {
        case cartActionTypes.TOGGLE_CART_DROPDOWN_HIDDEN:
            return {
                ...state,
                dropdownHidden: !state.dropdownHidden
            }
        default:
            return state;
    }
};

export default cartReducer;