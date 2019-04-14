import React from 'react';
import { shallow } from 'enzyme';
import SkiResortDetails from './SkiResortDetails';

describe('SkiResortDetails component', () => {
  it('should render correctly', () => {
    const props = {
      name: 'Castelluccio di Norcia',
      cams: {
        194: {
          name: 'Pian Perduto alt. 1452 mt',
          url: 'http://www.umbriameteo.com/web1a/images/castelluccio_pdah.jpg',
        },
        195: {
          name: "Vista sull'abitato di Castelluccio",
          url: 'http://www.umbriameteo.com/web1/images/lastpdah.jpg',
        },
      },
    };
    const skiResortDetailsInstance = shallow(<SkiResortDetails {...props} />);
    expect(skiResortDetailsInstance).toMatchSnapshot();
  });
});
