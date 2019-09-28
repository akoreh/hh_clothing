import React from 'react';
import { connect } from 'react-redux';

import { toggleCartDropdownHidden } from '../../redux/cart/cart.actions';

import {ShoppingBagIconContainer, ShoppingBagIconAsset, ItemCountContainer} from './ShoppingBagIcon.styles';

const ShoppingBagIcon = ({toggleCartDropdownHidden, itemCount}) => (
    <ShoppingBagIconContainer onClick={toggleCartDropdownHidden}>
        <ShoppingBagIconAsset />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </ShoppingBagIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartDropdownHidden: () => dispatch(toggleCartDropdownHidden())
});

export default connect(null, mapDispatchToProps)(ShoppingBagIcon);