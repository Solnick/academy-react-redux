import React from 'react';
import { shallow } from 'enzyme';
import Tab from './Tab';

describe('Tab component', () => {
  it('should render correctly', () => {
    const props = {
      to: '/about-us',
      text: 'about us',
      isActive: true,
    };
    const tabInstance = shallow(<Tab {...props} />);
    expect(tabInstance).toMatchSnapshot();
  });
});
