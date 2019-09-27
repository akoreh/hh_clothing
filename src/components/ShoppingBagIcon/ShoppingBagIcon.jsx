import React from 'react';

import {ShoppingBagIconContainer, ShoppingBagIconAsset, ItemCountContainer} from './ShoppingBagIcon.styles';

const ShoppingBagIcon = ({itemCount}) => (
    <ShoppingBagIconContainer>
        <ShoppingBagIconAsset />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </ShoppingBagIconContainer>
);

export default ShoppingBagIcon;