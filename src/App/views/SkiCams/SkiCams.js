import React, { useState, useEffect } from 'react';
import styles from './skiCams.module.scss';
import getSkiCamsData from '../../api/getSkiCamsData';
import parseSkiCamsData from '../../utils/parseSkiCamsData/parseSkiCamsData';
import SkiResortDetails from './SkiResortDetails/SkiResortDetails';
import View from '../../components/View/View';

const SkiCams = () => {
  const [skiCamsData, setSkiCamsData] = useState(null);

  useEffect(() => {
    getSkiCamsData()
      .then((resortsData) => {
        const searchFor = [
          'Castelluccio di Norcia',
          'Piani di Bobbio',
        ];
        const filteredSkiResorts = parseSkiCamsData(resortsData, searchFor);
        setSkiCamsData(filteredSkiResorts);
      });
  },
  []);
  return (
    <View>
      <div className={styles.skiCams}>
        {skiCamsData && skiCamsData.map(({ name, cams }) => (
          <SkiResortDetails
            key={name}
            name={name}
            cams={cams}
          />
        ))}
      </div>
    </View>
  );
};

export default SkiCams;
