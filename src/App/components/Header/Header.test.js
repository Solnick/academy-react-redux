import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('should render correctly', () => {
    const headerInstance = shallow(<Header />);
    expect(headerInstance).toMatchSnapshot();
  });
});
