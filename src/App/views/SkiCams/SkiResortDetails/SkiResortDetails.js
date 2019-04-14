import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Tile from '../../../components/Tile/Tile';
import styles from './skiResortDetails.module.scss';

const SkiResortDetails = (props) => {
  const { name, cams } = props;
  const camsArray = Object.values(cams).slice(0, 2);

  return (
    <Tile>
      <div className={styles.container}>
        <span className={styles.titleContainer}>
          <span>{moment().format('DD-MM-YYYY')}</span>
          <h2>{name}</h2>
        </span>
        {
          camsArray.map(cam => <img src={cam.url} key={cam.name} alt={cam.name} />)
        }
      </div>
    </Tile>
  );
};

SkiResortDetails.propTypes = {
  name: PropTypes.string.isRequired,
  cams: PropTypes.object.isRequired,
};

export default SkiResortDetails;
