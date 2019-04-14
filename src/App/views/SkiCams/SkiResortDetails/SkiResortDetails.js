import React from 'react';
import PropTypes from 'prop-types';
import getCurrentFormattedDate from '../../../utils/getCurrentFormattedDate';
import Tile from '../../../components/Tile/Tile';
import styles from './skiResortDetails.module.scss';

const SkiResortDetails = (props) => {
  const { name: skiResortName, cams } = props;
  const camsArray = Object.values(cams).slice(0, 2);

  return (
    <Tile>
      <div className={styles.container}>
        <span className={styles.titleContainer}>
          <span>{getCurrentFormattedDate()}</span>
          <h2>{skiResortName}</h2>
        </span>
        {
          camsArray.map(({ url, name }) => (
            <img
              src={url}
              key={name}
              alt={name}
            />
          ))
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
