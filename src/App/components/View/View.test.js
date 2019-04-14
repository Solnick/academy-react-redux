import React from 'react';
import { shallow } from 'enzyme';
import View from './View';

describe('View component', () => {
  it('should render correctly', () => {
    const viewInstance = shallow(<View />);
    expect(viewInstance).toMatchSnapshot();
  });
});
