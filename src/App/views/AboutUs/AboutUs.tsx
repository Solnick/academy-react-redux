import React from 'react';
import styles from './aboutUs.module.scss';
import View from '../../components/View/View';
import InfoBox from './InfoBox/InfoBox';
import infoBoxImg1 from '../../assets/images/infoBox1.png';
import infoBoxImg2 from '../../assets/images/infoBox2.png';
import infoBoxImg3 from '../../assets/images/infoBox3.png';

const aboutUsInfo = [
  {
    title: 'Lorem ipsum',
    text: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.',
    img: infoBoxImg1,
  },
  {
    title: 'Lorem ipsum',
    text: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.',
    img: infoBoxImg2,
  },
  {
    title: 'Lorem ipsum',
    text: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.',
    img: infoBoxImg3,
  },
];

const AboutUs = () => (
  <View>
    <div className={styles.aboutUsWrapper}>
      {
        aboutUsInfo.map(({ text, title, img }) => <InfoBox key={img} text={text} title={title} img={img} />)
      }
    </div>
  </View>
);

export default AboutUs;
