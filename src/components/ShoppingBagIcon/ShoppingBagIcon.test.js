import React from 'react';
import { shallow } from 'enzyme';

import { ShoppingBagIcon } from './ShoppingBagIcon';

describe('ShoppingBagIcon component', () => {
    let wrapper;
    let mockToggleCartDropdownHidden;

    beforeEach(() => {
        mockToggleCartDropdownHidden = jest.fn();

        const mockProps = {
            itemCount: 0,
            toggleCartDropdownHidden: mockToggleCartDropdownHidden
        };

        wrapper = shallow(<ShoppingBagIcon {...mockProps}/>);
    });

    it('should render ShoppingBagIcon', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the itemCount', () => {
        const itemCountRef = wrapper.find('ItemCountContainer');

        expect(itemCountRef.text()).toBe('0');
    });

    it('should call toggleCartDropdownHidden when the icon is clicked', () => {
        wrapper.find('ShoppingBagIconContainer').simulate('click');
        expect(mockToggleCartDropdownHidden).toHaveBeenCalled();
    });
});