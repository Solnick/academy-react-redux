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
    it('contains h2 element with title', () => {
      const infoBoxInstance = shallow(<InfoBox
        {...props}
      />);
      expect(infoBoxInstance.containsMatchingElement(<h2>{props.title}</h2>));
    });
    it('contains paragraph element with title', () => {
      const infoBoxInstance = shallow(<InfoBox
        {...props}
      />);
      expect(infoBoxInstance.containsMatchingElement(<p>{props.text}</p>));
    });
    it('contains paragraph element with title', () => {
      const infoBoxInstance = shallow(<InfoBox
        {...props}
      />);
      expect(infoBoxInstance.containsMatchingElement(<img src={props.img} alt={props.img} />));
    });
    it('should render correctly', () => {
      const infoBoxInstance = shallow(<InfoBox
        {...props}
      />);
      expect(infoBoxInstance).toMatchSnapshot();
    });
  });
});
