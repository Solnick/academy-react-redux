import React from 'react';
import { shallow } from 'enzyme';
import InfoBox from './InfoBox';
import testImage from '../../../assets/images/infoBox1.png';

describe('InfoBox component', () => {
  describe('when provided with props', () => {
    const props = {
      img: testImage,
      text: 'text',
      title: 'title',
    };
    const infoBoxInstance = shallow(<InfoBox
      {...props}
    />);
    it('contains h2 element with title', () => {
      expect(infoBoxInstance.containsMatchingElement(<h2>{props.title}</h2>));
    });
    it('contains paragraph element with title', () => {
      expect(infoBoxInstance.containsMatchingElement(<p>{props.text}</p>));
    });
  });
});
