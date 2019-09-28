import React from 'react';

import { shallow } from 'enzyme';

import {CartDropdown} from './CartDropdown';

describe('CartDropdown Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CartDropdown />);
    });

    it('should render CartDropdown component', ()=> {
        expect(wrapper).toMatchSnapshot();
    });
});