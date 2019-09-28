import CartActionTypes from './cart.types';
import {toggleCartDropdownHidden} from './cart.actions';
import cartReducer, { INITIAL_STATE } from './cart.reducer';

describe('Cart Reducer', () => {
    it('should return the initial state', () => {
        expect(cartReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should toggle the dropdownHidden property when toggleCartDropdownHidden action is fired', () => {
        const stateAfterAction = cartReducer(INITIAL_STATE, toggleCartDropdownHidden());

        expect(stateAfterAction.dropdownHidden).toEqual(false);
    });
});