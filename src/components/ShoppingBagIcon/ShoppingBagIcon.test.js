import React from 'react';
import { shallow } from 'enzyme';

import ShoppingBagIcon from './ShoppingBagIcon';

describe('ShoppingBagIcon component', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = {
            itemCount: 0
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
});