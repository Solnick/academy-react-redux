import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  it('should render correctly', () => {
    const footerInstance = shallow(<Footer />);
    expect(footerInstance).toMatchSnapshot();
  });
});
