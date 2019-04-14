import React from 'react';
import { shallow } from 'enzyme';
import AboutUs from './AboutUs';

describe('AboutUs component', () => {
  it('should render correctly', () => {
    const aboutUsInstance = shallow(<AboutUs />);
    expect(aboutUsInstance).toMatchSnapshot();
  });
});
