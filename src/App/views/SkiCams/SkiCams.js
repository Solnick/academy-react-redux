import React, { useState, useEffect } from 'react';
import styles from './skiCams.module.scss';
import getSkiCamsData from '../../api/getSkiCamsData';
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
        const filteredSkiResorts = Object.values(resortsData)
          .filter(
            skiResort => searchFor.includes(skiResort.name),
          );
        setSkiCamsData(filteredSkiResorts);
      });
  },
  []);
  return (
    <View>
      <div className={styles.skiCams}>
        {skiCamsData && skiCamsData.map(skiCamData => <SkiResortDetails key={skiCamData.name} {...skiCamData} />)}
      </div>
    </View>
  );
};

export default SkiCams;
