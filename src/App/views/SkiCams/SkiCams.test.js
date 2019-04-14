import React from 'react';
import { shallow } from 'enzyme';
import SkiCams from './SkiCams';

describe('SkiCams component', () => {
  it('should render correctly', () => {
    const skiCamsInstance = shallow(<SkiCams />);
    expect(skiCamsInstance).toMatchSnapshot();
  });
});
