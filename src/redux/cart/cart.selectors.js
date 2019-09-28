import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartDropdownHidden = createSelector(
    [selectCart],
    cart => cart.dropdownHidden
);