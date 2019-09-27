import React from 'react';

import ShoppingBagIcon from '../ShoppingBagIcon/ShoppingBagIcon';

import {NavBarContainer, OptionsContainer, OptionLink, Logo} from './NavBar.styles';

const NavBar = () => (
    <NavBarContainer>
        <Logo>HH</Logo>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/shop">CONTACT</OptionLink>
            <OptionLink to="/shop">SIGN IN</OptionLink>
            <ShoppingBagIcon itemCount={0} />
        </OptionsContainer>
    </NavBarContainer>
);

export default NavBar;