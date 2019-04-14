import React from 'react';
import { shallow } from 'enzyme';
import Tile from './Tile';

describe('Tile component', () => {
  it('should render correctly', () => {
    const tileInstance = shallow(<Tile />);
    expect(tileInstance).toMatchSnapshot();
  });
});
