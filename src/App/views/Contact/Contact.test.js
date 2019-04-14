import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('Contact component', () => {
  it('should render correctly', () => {
    const contactInstance = shallow(<Contact />);
    expect(contactInstance).toMatchSnapshot();
  });
});
