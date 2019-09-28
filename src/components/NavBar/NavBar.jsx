import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartDropdownHidden } from '../../redux/cart/cart.selectors';

import ShoppingBagIcon from '../ShoppingBagIcon/ShoppingBagIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import {NavBarContainer, OptionsContainer, OptionLink, Logo} from './NavBar.styles';

const NavBar = ({cartDropdownHidden}) => (
    <NavBarContainer>
        <Logo>HH</Logo>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/shop">CONTACT</OptionLink>
            <OptionLink to="/shop">SIGN IN</OptionLink>
            <ShoppingBagIcon itemCount={0} />
        </OptionsContainer>
        {!cartDropdownHidden ? <CartDropdown /> : null}
    </NavBarContainer>
);

const mapStateToProps = createStructuredSelector({
    cartDropdownHidden: selectCartDropdownHidden
});

export default connect(mapStateToProps)(NavBar);