import React from 'react';

import { shallow } from 'enzyme';

import { NavBar } from './NavBar';

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
});