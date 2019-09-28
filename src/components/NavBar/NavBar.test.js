import React from 'react';

import { shallow } from 'enzyme';

import { NavBar } from './NavBar';
import { CartDropdown } from '../CartDropdown/CartDropdown';

describe('NavBar component', () => {
    let wrapper;

    const mockProps = {
        cartDropdownHidden: true
    };

    beforeEach(() => {
        wrapper = shallow(<NavBar {...mockProps}/>)
    });

    it('should render NavBar', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('CartDropdown being shown', () => {
        it('should not render CartDropdown if its hidden', () => {
            expect(wrapper.exists(CartDropdown)).toBe(false);
        });

        it('should render CartDropdow if its not hidden', () => {
            const newProps = {...mockProps, cartDropdownHidden: false};

            const wrapper = shallow(<NavBar {...newProps}/>)

            expect(wrapper.exists(CartDropdown)).toBe(true);
        });
    });
});