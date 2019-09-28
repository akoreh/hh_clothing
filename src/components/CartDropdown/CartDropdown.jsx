import React from 'react';

import {CartDropdownContainer, EmptyMessageContainer, CartItemsContainer} from './CartDropdown.styles';

const CartDropdown = () => (
    <CartDropdownContainer>
        <CartItemsContainer>
            <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        </CartItemsContainer>
    </CartDropdownContainer>
);

export default CartDropdown;