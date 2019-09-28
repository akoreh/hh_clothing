import CartActionTypes from './cart.types';
import {toggleCartDropdownHidden} from './cart.actions';

describe('Cart Actions', () => {
    describe('toggleCartDropdownHidden action', () => {
        it('should create the toggleCartDropdown hidden action', () => {
            expect(toggleCartDropdownHidden().type).toEqual(CartActionTypes.TOGGLE_CART_DROPDOWN_HIDDEN);
        });
    });
});